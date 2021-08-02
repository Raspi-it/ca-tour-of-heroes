import { Component, Input, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { HeroEntity } from "src/app/core/domain/entity/hero.entity";
import { ActivatedRoute } from "@angular/router";
import { UpdateHeroAction } from "./detail.page.state";
import { Store } from "@ngxs/store";
import { ChangeVisibilityAction } from "../dashboard/dashboard.page.state";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: [ './detail.page.css' ]
})
export class DetailPage implements OnInit {

    @Input() load: string;
    @Input() hero: HeroEntity;

    hero_input: string;

    constructor(
        private store: Store,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(){
    }

    async save() {
        if(this.hero) {
            //this.hero.name = this.hero_input; 
            //hier wird aktuell nur der "alte" Hero übergeben
            await this.store.dispatch(new UpdateHeroAction([this.hero, this.hero_input])).toPromise();
            this.goBack();
        }
    }

    async goBack() {
        await this.store.dispatch(new ChangeVisibilityAction('dashboard')).toPromise();
    }
}