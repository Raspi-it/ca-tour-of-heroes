import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { from } from "rxjs";
import { tap } from "rxjs/operators";
import { AbstractPushMessagesUseCase } from "./features/messages/domain/use-case/abstract.push.messages.use.case";

export class StartLoadingAction {
    static readonly type = '[APP] loading start';
}

export class FinishLoadingAction {
    static readonly type = '[APP] loading done';
}

export interface AppStateModel {
    loading?: boolean;
}

@State<AppStateModel>({
    name: 'app'
})

@Injectable()
export class AppStore {
    @Selector()
    static loading({ loading }: AppStateModel) {
        return loading;
    }


    constructor() { }

        @Action(StartLoadingAction)
        startLoading({ patchState }: StateContext<AppStateModel>) {
            patchState ({
                loading: true
            })
        }

        @Action(FinishLoadingAction)
        finishLoading({ patchState }: StateContext<AppStateModel>) {
            patchState ({
                loading: false
            })
        }
}