import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractDataUseCase } from "src/app/features/data/domain/use-case/abstract.data.use.case";
import { PushMessageAction } from "../home/home.page.state";

export class GetHeroesAction {
    static readonly type = '[DATA] load all heroes';
}

export class SetHeroAction {
    static readonly type = '[DATA] set temporary hero for detail page';
    constructor(public readonly payload: HeroEntity) {}
}

export interface DashboardPageStateModel {
    heroes?: HeroEntity[];
    hero?: HeroEntity;
}


@State<DashboardPageStateModel>({
    name: 'dashboard',
})
@Injectable()
export class DashboardPageState {
    @Selector()
    static heroes({ heroes }: DashboardPageStateModel) {
        return heroes;
    }

    @Selector()
    static hero({ hero }: DashboardPageStateModel) {
        return hero;
    }

    constructor(
        private readonly dataUseCase: AbstractDataUseCase
        ){ }

    @Action(SetHeroAction)
    setHeroAction({ patchState }: StateContext<DashboardPageStateModel>, { payload }: SetHeroAction) {
        return patchState({
            hero: payload
        })
    }

    @Action(GetHeroesAction)
    getHeroes({ patchState, dispatch }: StateContext<DashboardPageStateModel>) {
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