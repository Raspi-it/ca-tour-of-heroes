import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "./core/domain/entity/hero.entity";
import { AbstractDataUseCase } from "./features/data/domain/use-case/abstract.data.use.case";
import { PushMessageAction } from "./pages/components/messages/messages.component.state";

export class AppGetHeroesAction {
    static readonly type = '[APP] load all heroes';
}

export interface AppStateModel {
    visibility?: string;
    heroes?: HeroEntity[];
}

@State<AppStateModel>({
    name: 'app'
})

@Injectable()
export class AppStore {

    @Selector()
    static heroes({ heroes }: AppStateModel) {
        return heroes;
    }

    constructor(
        private readonly dataUseCase: AbstractDataUseCase
    ) {}

    @Action(AppGetHeroesAction)
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