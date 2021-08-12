import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppGetHeroesAction, AppStore } from 'src/app/app.store';
import { HeroModel } from 'src/app/core/data/models/hero.model';
import { HeroEntity } from 'src/app/core/domain/entity/hero.entity';
import { HeroesAddHeroAction, HeroesDeleteHeroAction } from './heroes.page.state';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.css']
})
export class HeroesPage implements OnInit {

    //@Select(AppStore.heroes) heroes$: Observable<HeroEntity[]>;

    id: number;
    hero: HeroEntity;
    heroes: HeroEntity[];

    constructor(
        private readonly store: Store
    ) {}

    async ngOnInit() {
        await this.store.dispatch(new AppGetHeroesAction()).toPromise();
        this.heroes = this.store.selectSnapshot(AppStore.heroes);
    }

    async add(newName: string) {        
        newName = newName.trim();
        if (!newName) { return; }

        this.id = this.heroes.length > 0 ? Math.max(...this.heroes.map(hero => hero.id)) + 1 : 11;
        this.hero = new HeroModel({id: this.id, name: newName});
        await this.store.dispatch(new HeroesAddHeroAction(this.hero)).toPromise();
        await this.store.dispatch(new AppGetHeroesAction()).toPromise();
    }

    async delete(hero: HeroEntity) {
        this.heroes = this.heroes.filter(h => h !== hero);
        await this.store.dispatch(new HeroesDeleteHeroAction(hero)).toPromise();
    }
}
