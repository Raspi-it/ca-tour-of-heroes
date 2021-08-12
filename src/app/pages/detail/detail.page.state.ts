import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractGetHeroUseCase } from "src/app/features/get-hero/domain/use-case/abstract.get.hero.use.case";
import { AbstractUpdateHeroUseCase } from "src/app/features/update-hero/domain/use-case/abstract.update.hero.use.case";
import { PushMessageAction } from "../components/messages/messages.component.state";

export class DetailUpdateHeroAction {
    static readonly type = '[DETAIL] update hero'
    constructor(public readonly payload) { }
}

export class DetailGetHeroByIdAction {
    static readonly type = '[DETAIL] get temporary hero for detail page';
    constructor(public readonly payload: number) {}
}

export interface DetailPageStateModel {
    hero?: HeroEntity;
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
        private readonly getHeroUseCase: AbstractGetHeroUseCase
        ){ }

    @Action(DetailGetHeroByIdAction)
    getHeroAction({ patchState, dispatch }: StateContext<DetailPageStateModel>, { payload }: DetailGetHeroByIdAction) {
        return from(this.getHeroUseCase.execute(payload)).pipe(
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
               finalize(() => dispatch(new PushMessageAction(`fetched hero id=`+payload)))
        );
    }

    @Action(DetailUpdateHeroAction)
    saveHero({ dispatch }: StateContext<DetailPageStateModel>, { payload }: DetailUpdateHeroAction) {
         return from(this.updateHeroUseCase.execute(payload)).pipe(
             tap(res => {
                 if(res instanceof AbstractCustomError) {
                    console.log(res.message);
                 } 
                    }
                ),
            finalize(() => dispatch(new PushMessageAction(`updated hero id=`+payload[0])))
             );
    }
}