import { Component, Input, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { ChangeVisibilityAction, DashboardPageState, GetHeroesAction, SetHeroAction } from "./dashboard.page.state";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: [ './dashboard.page.css' ]
})
export class DashboardPage implements OnInit {

    @Select(DashboardPageState.heroes) heroes$: Observable<HeroEntity[]>;

    @Input() load: string;

    constructor(
        private readonly store: Store
    ) { 
        this.getEvent();
     }

    ngOnInit() { }
        
    async getEvent() {
        this.store.dispatch(new GetHeroesAction()).toPromise();
    }

    async changePage($event) {
        await this.store.dispatch(new ChangeVisibilityAction($event.load)).toPromise();
        await this.store.dispatch(new SetHeroAction($event.hero)).toPromise();
    }
}