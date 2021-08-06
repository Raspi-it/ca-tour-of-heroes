import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity"
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractAddHeroUseCase } from "src/app/features/add-hero/domain/use-case/abstract.add.hero.use.case";
import { AbstractDeleteHeroUseCase } from "src/app/features/delete-hero/domain/use-case/abstract.delete.hero.use.case";

export class AddHeroAction{
    static readonly type = '[DATA] add hero'
    constructor(public readonly payload: HeroEntity[]) { }
}

export class DeleteHeroAction{
    static readonly type = '[DATA] delete hero'
    constructor(public readonly payload: HeroEntity[]) { }
}

export class PushMessageAction {
    static readonly type = '[MESSAGE] add message';
    constructor(public readonly payload: string) {}
}

export interface HeroesPageStateModel {
    hero?: HeroEntity[];
    del_hero?: HeroEntity;
    messages?: string[];
}

@State<HeroesPageStateModel>({
    name: 'heroes'
})

@Injectable()
export class HeroesPageState {
    @Selector()
    static hero({ hero }: HeroesPageStateModel) {
        return hero;
    }

    @Selector()
    static del_hero({ del_hero }: HeroesPageStateModel) {
        return del_hero;
    }

    constructor(
        private readonly deleteHeroUseCase: AbstractDeleteHeroUseCase,
        private readonly addHeroUseCase: AbstractAddHeroUseCase
        ){ }

    @Action(DeleteHeroAction)
    deleteHero({ patchState, dispatch }: StateContext<HeroesPageStateModel>, { payload }: DeleteHeroAction) {
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
                finalize(() => dispatch(new PushMessageAction(`deleted hero id=${HeroesPageState.hero}`)))
                );
    }
    
    @Action(AddHeroAction)
    addHero({ patchState, dispatch }: StateContext<HeroesPageStateModel>, { payload }: AddHeroAction) {
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
            finalize(() => dispatch(new PushMessageAction(`added hero w/ id=${HeroesPageState.hero}`)))
                );
    }
}