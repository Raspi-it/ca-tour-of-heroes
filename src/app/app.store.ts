import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";

export class StartLoadingAction {
    static readonly type = '[APP] loading start';
}

export class FinishLoadingAction {
    static readonly type = '[APP] loading done';
}

export class ChangeVisibilityAction {
    static readonly type = '[VISIBILITY] viewstate of components';
    constructor(public readonly payload: string) {}
}

export interface AppStateModel {
    loading?: boolean;
    visibility?: string;
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
    static loading({ loading }: AppStateModel) {
        return loading;
    }

    @Selector()
    static visibility({ visibility }: AppStateModel) {
        return visibility;
    }

    @Action(ChangeVisibilityAction)
    changeVisibility({ patchState }: StateContext<AppStateModel>, { payload }: ChangeVisibilityAction) {
        return patchState({
                        visibility: payload
                    });
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