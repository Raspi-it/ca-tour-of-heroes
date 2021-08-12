import { Component, OnInit } from "@angular/core";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { DetailUpdateHeroAction, DetailGetHeroByIdAction, DetailPageState } from "./detail.page.state";
import { Select, Store } from "@ngxs/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: [ './detail.page.css' ]
})
export class DetailPage implements OnInit {

    @Select(DetailPageState.hero) hero$: Observable<HeroEntity>;

    hero_input: string;

    constructor(
        private route: ActivatedRoute,
        private store: Store
    ) { }

    async ngOnInit(){
        this.getHero();
    }

    async getHero() {
        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
        await this.store.dispatch(new DetailGetHeroByIdAction(id)).toPromise();
    }

    async save(hero) {
        await this.store.dispatch(new DetailUpdateHeroAction([hero.id, this.hero_input])).toPromise();
    }
}