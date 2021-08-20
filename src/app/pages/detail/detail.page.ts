import { Component, OnInit } from "@angular/core";
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { DetailUpdateHeroAction, DetailGetHeroByIdAction, DetailPageState } from "./detail.page.state";
import { Select, Store } from "@ngxs/store";

import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { Observable } from "rxjs";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: [ './detail.page.css' ]
})
export class DetailPage implements OnInit {

    @Select(DetailPageState.hero) hero$!: Observable<HeroEntity>;

    hero_input: string;
    id: number;

    constructor(
        private route: ActivatedRoute,
        private store: Store,
        private location: Location
    ) { }

    async ngOnInit(){
        this.getHero();
    }

    async getHero() {
        this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
        await this.store.dispatch(new DetailGetHeroByIdAction(this.id)).toPromise();
    }

    goBack(): void {
        this.location.back();
    }

    async save() {
        await this.store.dispatch(new DetailUpdateHeroAction([this.id, this.hero_input])).toPromise();
    }
}