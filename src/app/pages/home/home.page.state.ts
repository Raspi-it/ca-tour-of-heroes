import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { from } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { AbstractClearMessagesUseCase } from "src/app/features/clear-messages/domain/use-case/abstract.clear.messages.use.case";
import { AbstractDataUseCase } from "src/app/features/data/domain/use-case/abstract.data.use.case";
import { AbstractGetMessagesUseCase } from "src/app/features/get-messages/domain/use-case/abstract.get.messages.use.case";
import { AbstractPushMessagesUseCase } from "src/app/features/push-messages/domain/use-case/abstract.push.messages.use.case";

export class PushMessageAction {
    static readonly type = '[MESSAGE] ADD message';
    constructor(public readonly payload: string) {}
}

export class GetMessageAction {
    static readonly type = '[MESSAGE] GET messages';
}

export class ClearMessageAction {
    static readonly type = '[MESSAGE] CLEAR messages';
}

export class GetHeroesAction {
    static readonly type = '[DATA] load all heroes';
}

export interface HomePageStateModel {
    messages?: string[];
    heroes?: HeroEntity[];
}

@State<HomePageStateModel>({
    name: 'home'
})

@Injectable()
export class HomePageState {
    @Selector()
    static messages({ messages }: HomePageStateModel) {
        return messages;
    }

    @Selector()
    static heroes({ heroes }: HomePageStateModel) {
        return heroes;
    }

    constructor(
        private readonly pushMessagesUseCase: AbstractPushMessagesUseCase,
        private readonly getMessagesUseCase: AbstractGetMessagesUseCase,
        private readonly clearMessagesUseCase: AbstractClearMessagesUseCase,
        private readonly dataUseCase: AbstractDataUseCase
    ) { }

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

    @Action(PushMessageAction)
    async pushMessage({ dispatch }: StateContext<HomePageStateModel>, { payload }: PushMessageAction) {
        // try{ 
            this.pushMessagesUseCase.execute(payload);
        // } catch (error) {
        //    console.log(error.message);
        //}
        // finalize(() => dispatch(new GetMessageAction()));
        dispatch(new GetMessageAction())
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

    @Action(GetHeroesAction)
    getHeroes({ patchState, dispatch }: StateContext<HomePageStateModel>) {
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