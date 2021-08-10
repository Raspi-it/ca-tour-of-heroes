import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { SetHeroAction } from "../detail/detail.page.state";
import { GetHeroesAction, DashboardPageState } from "./dashboard.page.state";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: [ './dashboard.page.css' ]
})
export class DashboardPage implements OnInit {

    @Select(DashboardPageState.heroes) heroes$: Observable<HeroEntity[]>;

    @Input() load: string;
    @Input() heroes: HeroEntity[];

    @Output() ChangePageDashboardEvent = new EventEmitter();
    @Output() PushMessageDashboardEvent = new EventEmitter();

    constructor(
        private readonly store: Store
    ) {
        this.getHeroes();
     }

    ngOnInit() { }
        
    async getHeroes() {
        this.store.dispatch(new GetHeroesAction()).toPromise();
    }

    async changePage($event) {
        this.ChangePageDashboardEvent.emit({load: $event.load});
        this.PushMessageDashboardEvent.emit({msg: 'fetched hero id='+$event.hero.id});

        await this.store.dispatch(new SetHeroAction($event.hero)).toPromise();
    }
}