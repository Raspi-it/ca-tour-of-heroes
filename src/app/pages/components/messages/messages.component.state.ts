import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { tap } from "rxjs/operators";
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractClearMessagesUseCase } from "src/app/features/clear-messages/domain/use-case/abstract.clear.messages.use.case";
import { AbstractGetMessagesUseCase } from "src/app/features/get-messages/domain/use-case/abstract.get.messages.use.case";
import { AbstractPushMessagesUseCase } from "src/app/features/push-messages/domain/use-case/abstract.push.messages.use.case";

export class PushMessageAction {
    static readonly type = '[MESSAGES] ADD message';
    constructor(public readonly payload: string) {}
}

export class GetMessageAction {
    static readonly type = '[MESSAGES] GET messages';
}

export class ClearMessageAction {
    static readonly type = '[MESSAGES] CLEAR messages';
}

export interface MessagesStateModel {
    messages?: string[];
}

@State<MessagesStateModel>({
    name: 'home'
})

@Injectable()
export class MessagesComponentState {

    @Selector()
    static messages({ messages }: MessagesStateModel) {
        return messages;
    }

    constructor(
        private readonly pushMessagesUseCase: AbstractPushMessagesUseCase,
        private readonly getMessagesUseCase: AbstractGetMessagesUseCase,
        private readonly clearMessagesUseCase: AbstractClearMessagesUseCase
    ) { }

    @Action(PushMessageAction)
    async pushMessage({ dispatch }: StateContext<MessagesStateModel>, { payload }: PushMessageAction) {
        await this.pushMessagesUseCase.execute(payload);
        dispatch(new GetMessageAction());

        // const res = await this.pushMessagesUseCase.execute(payload);
        // if (res instanceof AbstractCustomError) {
        //     console.log('PushMessage FEHLER!');
        // } else {
        //     dispatch(new GetMessageAction());
        // }
    }

    @Action(GetMessageAction)
    getMessage({ patchState }: StateContext<MessagesStateModel>) {
        return from(this.getMessagesUseCase.execute()).pipe(
            tap(res => {
                patchState({
                    messages: res
                })
            })
        )
    }

    @Action(ClearMessageAction)
    clearMessage({ patchState }: StateContext<MessagesStateModel>) {
         return from(this.clearMessagesUseCase.execute()).pipe(
             tap(res => {
                 patchState({
                     messages: res
                 })
             })
         )
    }
}