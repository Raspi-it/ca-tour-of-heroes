import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity"
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractAddHeroUseCase } from "src/app/features/add-hero/domain/use-case/abstract.add.hero.use.case";
import { AbstractDataUseCase } from "src/app/features/data/domain/use-case/abstract.data.use.case";
import { AbstractDeleteHeroUseCase } from "src/app/features/delete-hero/domain/use-case/abstract.delete.hero.use.case";
import { PushMessageAction } from "../home/home.page.state";

export class AddHeroAction{
    static readonly type = '[DATA] add hero'
    constructor(public readonly payload: HeroEntity) { }
}

export class DeleteHeroAction{
    static readonly type = '[DATA] delete hero'
    constructor(public readonly payload: HeroEntity) { }
}

export class GetHeroesAction {
    static readonly type = '[DATA] load all heroes';
}

export interface HeroesPageStateModel { 
    heroes?: HeroEntity[];
}

@State<HeroesPageStateModel>({
    name: 'heroes'
})

@Injectable()
export class HeroesPageState {

    @Selector()
    static heroes({ heroes }: HeroesPageStateModel) {
        return heroes;
    }

    constructor(
        private readonly deleteHeroUseCase: AbstractDeleteHeroUseCase,
        private readonly addHeroUseCase: AbstractAddHeroUseCase,
        private readonly dataUseCase: AbstractDataUseCase
        ){ }

    @Action(DeleteHeroAction)
    deleteHero({ dispatch }: StateContext<HeroesPageStateModel>, { payload }: DeleteHeroAction) {
        return from(this.deleteHeroUseCase.execute(payload)).pipe(
            finalize(() => dispatch(new PushMessageAction(`deleted hero id=`+payload.id)))
            );
    }
    
    @Action(AddHeroAction)
    addHero({ dispatch }: StateContext<HeroesPageStateModel>, { payload }: AddHeroAction) {
        return from(this.addHeroUseCase.execute(payload)).pipe(
            tap(res => {
            if(res instanceof AbstractCustomError) {
                console.log(res.message);
                }
            }
        ),
        finalize(() => dispatch(new PushMessageAction(`added hero w/ id=`+payload.id)))
            );
    }

    @Action(GetHeroesAction)
    getHeroes({ patchState, dispatch }: StateContext<HeroesPageStateModel>) {
        return from(this.dataUseCase.execute()).pipe(
            tap(res => {
                    patchState({
                        heroes: res
                    });
                    }
                ),
            finalize(() => dispatch(new PushMessageAction('fetched heroes'))));
    }
}