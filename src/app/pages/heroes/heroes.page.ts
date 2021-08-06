import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChangeVisibilityAction } from 'src/app/app.store';
import { HeroModel } from 'src/app/core/data/models/hero.model';
import { HeroEntity } from 'src/app/core/domain/entity/hero.entity';
import { SetHeroAction } from '../dashboard/dashboard.page.state';
import { AddHeroAction, DeleteHeroAction } from './heroes.page.state';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.css']
})
export class HeroesPage implements OnInit {
  
    @Input() heroes: HeroEntity[];
    @Input() load: string;

    id: number;
    hero: HeroEntity[];

    constructor(
        private readonly store: Store
    ) { }

    ngOnInit() {
    }

    async changePage(load, hero) {
        await this.store.dispatch(new ChangeVisibilityAction(load)).toPromise();
        await this.store.dispatch(new SetHeroAction(hero)).toPromise();
    }

    async add(new_name: string) {        
        new_name = new_name.trim();
        if (!new_name) { return; }

        this.id = this.heroes.length > 0 ? Math.max(...this.heroes.map(hero => hero.id)) + 1 : 11;
        this.hero?.push(new HeroModel({id: this.id, name: new_name}));
        await this.store.dispatch(new AddHeroAction(this.hero)).toPromise();
    }

    async delete(hero: HeroEntity) {
        //this.heroes = this.heroes.filter(h => h !== hero);
        console.log(hero);
        await this.store.dispatch(new DeleteHeroAction(this.heroes)).toPromise();
    }

}
