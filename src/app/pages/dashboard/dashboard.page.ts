import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AppGetHeroesAction, AppStore } from "src/app/app.store";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: [ './dashboard.page.css' ]
})
export class DashboardPage implements OnInit {

    @Select(AppStore.heroes) heroes$: Observable<HeroEntity[]>;

    constructor(
        private readonly store: Store
    ) {}

    async ngOnInit(){
        this.getHeroes();
    }
        
    async getHeroes() {
        await this.store.dispatch(new AppGetHeroesAction()).toPromise();
    }
}