import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { tap } from "rxjs/operators";
import { AbstractClearMessagesUseCase } from "src/app/features/clear-messages/domain/use-case/abstract.clear.messages.use.case";
import { AbstractGetMessagesUseCase } from "src/app/features/get-messages/domain/use-case/abstract.get.messages.use.case";
import { AbstractPushMessagesUseCase } from "src/app/features/push-messages/domain/use-case/abstract.push.messages.use.case";

export class PushMessageAction {
    static readonly type = '[MESSAGE] add message';
    constructor(public readonly payload: string) {}
}

export class GetMessageAction {
    static readonly type = '[MESSAGE] get messages';
}

export class ClearMessageAction {
    static readonly type = '[MESSAGE] clear messages';
}

export interface HomePageStateModel {
    messages?: string[];
}

@State<HomePageStateModel>({
    name: 'home',
})

@Injectable()
export class HomePageState {
    @Selector()
    static messages({ messages }: HomePageStateModel) {
        return messages;
    }

    constructor(
        private readonly pushMessagesUseCase: AbstractPushMessagesUseCase,
        private readonly getMessagesUseCase: AbstractGetMessagesUseCase,
        private readonly clearMessagesUseCase: AbstractClearMessagesUseCase,
    ) { }

    @Action(PushMessageAction)
        pushMessage({ patchState }: StateContext<HomePageStateModel>, { payload }: PushMessageAction) {
            return from(this.pushMessagesUseCase.execute(payload)).pipe(
                tap(res => {
                    patchState({
                        messages: res
                    })
                })
            )
        }

    @Action(GetMessageAction)
        getMessage({ patchState }: StateContext<HomePageStateModel>) {
            return from(this.getMessagesUseCase.execute()).pipe(
                tap(res => {
                    patchState({
                        messages: res
                    })
                })
            )
        }

    @Action(ClearMessageAction)
    clearMessage({ patchState }: StateContext<HomePageStateModel>) {
         return from(this.clearMessagesUseCase.execute()).pipe(
             tap(res => {
                 patchState({
                     messages: res
                 })
             })
         )
    }
}