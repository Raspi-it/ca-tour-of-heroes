import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "./core/domain/entity/hero.entity";
import { AbstractDataUseCase } from "./features/data/domain/use-case/abstract.data.use.case";
import { PushMessageAction } from "./pages/home/home.page.state";

export class ChangeVisibilityAction {
    static readonly type = '[VISIBILITY] viewstate of components';
    constructor(public readonly payload: string) {}
}

export class GetHeroesAction {
    static readonly type = '[DATA] load all heroes';
}

export interface AppStateModel {
    visibility?: string;
    heroes?: HeroEntity[];
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        visibility: 'dashboard'
    }
})

@Injectable()
export class AppStore {

    @Selector()
    static visibility({ visibility }: AppStateModel) {
        return visibility;
    }

    @Selector()
    static heroes({ heroes }: AppStateModel) {
        return heroes;
    }

    constructor(
        private readonly dataUseCase: AbstractDataUseCase
    ) {}

    @Action(ChangeVisibilityAction)
    changeVisibility({ patchState }: StateContext<AppStateModel>, { payload }: ChangeVisibilityAction) {
        return patchState({
                        visibility: payload
                    });
    }

    @Action(GetHeroesAction)
    getHeroes({ patchState, dispatch }: StateContext<AppStateModel>) {
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