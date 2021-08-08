import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch } from "@ngxs/store/operators";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractUpdateHeroUseCase } from "src/app/features/update-hero/domain/use-case/abstract.update.hero.use.case";
import { PushMessageAction } from "../home/home.page.state";

export class UpdateHeroAction {
    static readonly type = '[DATA] update hero'
    constructor(public readonly payload) { }
}

export class SetHeroAction {
    static readonly type = '[DATA] set temporary hero for detail page';
    constructor(public readonly payload: HeroEntity) {}
}

export interface DetailPageStateModel {
    updateHero?: HeroEntity;
    hero?: HeroEntity;
}

@State<DetailPageStateModel>({
    name: 'detail'
})

@Injectable()
export class DetailPageState {
    @Selector()
    static updateHero({ updateHero }: DetailPageStateModel) {
        return updateHero;
    }

    @Selector()
    static hero({ hero }: DetailPageStateModel) {
        return hero;
    }

    constructor(
        private readonly updateHeroUseCase: AbstractUpdateHeroUseCase
        ){ }

    @Action(SetHeroAction)
    setHeroAction({ patchState }: StateContext<DetailPageStateModel>, { payload }: SetHeroAction) {
        return patchState({
            hero: payload
        })
    }

    @Action(UpdateHeroAction)
    saveHero({ setState, dispatch }: StateContext<DetailPageStateModel>, { payload }: UpdateHeroAction) {
         return from(this.updateHeroUseCase.execute(payload)).pipe(
             tap(res => {
                 if(res instanceof AbstractCustomError) {
                    console.log(res.message);
                 } else {
                     setState(
                         patch<DetailPageStateModel>({
                            updateHero: res
                         })
                     );
                    }
                    }
                ),
            finalize(() => dispatch(new PushMessageAction(`updated hero id=${DetailPageState.updateHero}`)))
             );
    }
}