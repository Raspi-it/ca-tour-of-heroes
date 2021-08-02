import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch } from "@ngxs/store/operators";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractAddHeroUseCase } from "src/app/features/add-hero/domain/use-case/abstract.add.hero.use.case";
import { AbstractDeleteHeroUseCase } from "src/app/features/delete-hero/domain/use-case/abstract.delete.hero.use.case";
import { AbstractUpdateHeroUseCase } from "src/app/features/update-hero/domain/use-case/abstract.update.hero.use.case";
import { PushMessageAction } from "../home/home.page.state";

export class UpdateHeroAction{
    static readonly type = '[DATA] update hero'
    constructor(public readonly payload) { }
}

export class DeleteHeroAction{
    static readonly type = '[DATA] delete hero'
    constructor(public readonly payload: HeroEntity[]) { }
}

export class AddHeroAction{
    static readonly type = '[DATA] add hero'
    constructor(public readonly payload: HeroEntity[]) { }
}

export interface DetailPageStateModel {
    hero?: HeroEntity[];
    del_hero?: HeroEntity;
    updateHero?: HeroEntity;
}

@State<DetailPageStateModel>({
    name: 'detail'
})

@Injectable()
export class DetailPageState {
    @Selector()
    static hero({ hero }: DetailPageStateModel) {
        return hero;
    }

    constructor(
        private readonly updateHeroUseCase: AbstractUpdateHeroUseCase,
        private readonly deleteHeroUseCase: AbstractDeleteHeroUseCase,
        private readonly addHeroUseCase: AbstractAddHeroUseCase
        ){ }

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
            finalize(() => dispatch(new PushMessageAction(`updated hero id=${DetailPageState.hero}`)))
             );
    }

    @Action(DeleteHeroAction)
    deleteHero({ patchState, dispatch }: StateContext<DetailPageStateModel>, { payload }: DeleteHeroAction) {
         return from(this.deleteHeroUseCase.execute(payload)).pipe(
             tap(res => {
                if(res instanceof AbstractCustomError) {
                    console.log(res.message);
                 } else {
                     patchState({
                         del_hero: res
                     });
                    }
                    }
                ),
                finalize(() => dispatch(new PushMessageAction(`deleted hero id=${DetailPageState.hero}`)))
             );
    }

    @Action(AddHeroAction)
    addHero({ patchState, dispatch }: StateContext<DetailPageStateModel>, { payload }: AddHeroAction) {
         return from(this.addHeroUseCase.execute(payload)).pipe(
             tap(res => {
                if(res instanceof AbstractCustomError) {
                    console.log(res.message);
                 } else {
                     patchState({
                         hero: res
                     });
                     }
             }
            ),
            finalize(() => dispatch(new PushMessageAction(`added hero w/ id=${DetailPageState.hero}`)))
             );
    }
}