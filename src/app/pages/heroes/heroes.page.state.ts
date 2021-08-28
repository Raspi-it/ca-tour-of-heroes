import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity"
import { AbstractCustomError } from "src/app/core/errors";
import { AbstractAddHeroUseCase } from "src/app/features/add-hero/domain/use-case/abstract.add.hero.use.case";
import { AbstractDeleteHeroUseCase } from "src/app/features/delete-hero/domain/use-case/abstract.delete.hero.use.case";
import { PushMessageAction } from "../components/messages/messages.component.state";

export class HeroesAddHeroAction{
    static readonly type = '[HEROES] add hero'
    constructor(public readonly payload: HeroEntity) { }
}

export class HeroesDeleteHeroAction{
    static readonly type = '[HEROES] delete hero'
    constructor(public readonly payload: HeroEntity) { }
}

export interface HeroesPageStateModel {
}

@State<HeroesPageStateModel>({
    name: 'heroes'
})

@Injectable()
export class HeroesPageState {

    constructor(
        private readonly deleteHeroUseCase: AbstractDeleteHeroUseCase,
        private readonly addHeroUseCase: AbstractAddHeroUseCase
        ){ }

    @Action(HeroesDeleteHeroAction)
    async deleteHero({ dispatch }: StateContext<HeroesPageStateModel>, { payload }: HeroesDeleteHeroAction) {
        const res = await this.deleteHeroUseCase.execute(payload);
        if (res instanceof AbstractCustomError) {
            console.log('Delete Hero failed!');
        } else {
            dispatch(new PushMessageAction(`deleted hero id=`+payload.id));
        }
    }
    
    @Action(HeroesAddHeroAction)
    async addHero({ dispatch }: StateContext<HeroesPageStateModel>, { payload }: HeroesAddHeroAction) {
        const res = await this.addHeroUseCase.execute(payload)
            if(res instanceof AbstractCustomError) {
                console.log(res.message);
            } else {
                dispatch(new PushMessageAction(`added hero w/ id=`+payload.id));
            }
    }
}