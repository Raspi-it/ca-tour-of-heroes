import { Component, Injectable, OnChanges, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AppStore, ChangeVisibilityAction, GetHeroesAction } from "src/app/app.store";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { DetailPageState } from "../detail/detail.page.state";
import { ClearMessageAction, GetMessageAction, HomePageState, PushMessageAction } from "./home.page.state";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.css']
})
@Injectable()
export class HomePage implements OnInit, OnChanges{

    @Select(HomePageState.heroes) heroes$: Observable<HeroEntity[]>;
    @Select(DetailPageState.hero) hero$: Observable<HeroEntity>;
    @Select(AppStore.visibility) visibility$: Observable<string>;
    @Select(HomePageState.messages) messages$: Observable<string[]>;

    title: string = 'Tour of Heores';

    constructor(private readonly store: Store) { 
        //this.getHeroes();
     }

    ngOnInit() {

    }

    ngOnChanges() {
        
    }

    async changePage($event) {
        await this.store.dispatch(new ChangeVisibilityAction($event.load)).toPromise();
    }

    async pushMessage($event) {
        await this.store.dispatch(new PushMessageAction($event.msg)).toPromise();
        await this.store.dispatch(new GetMessageAction()).toPromise();
    }

    async clearMessage() {
        await this.store.dispatch(new ClearMessageAction()).toPromise();
    }

    async getHeroes() {
        await this.store.dispatch(new GetHeroesAction()).toPromise();
    }
}