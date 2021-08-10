import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetHeroesAction } from 'src/app/app.store';
import { HeroModel } from 'src/app/core/data/models/hero.model';
import { HeroEntity } from 'src/app/core/domain/entity/hero.entity';
import { SetHeroAction } from '../detail/detail.page.state';
import { AddHeroAction, DeleteHeroAction } from './heroes.page.state';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.css']
})
export class HeroesPage implements OnInit, OnChanges {
  
    @Input() heroes: HeroEntity[];
    @Input() load: string;

    @Output() ChangePageDashboardEvent = new EventEmitter();
    @Output() PushMessageDashboardEvent = new EventEmitter();

    id: number;
    hero: HeroEntity;
    Allheroes: HeroEntity[];

    constructor(
        private readonly store: Store
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    ngOnChanges() {
        
     }

    async changePage(load, hero, msg) {
        this.ChangePageDashboardEvent.emit({load: load});
        this.PushMessageDashboardEvent.emit({msg: msg});

        await this.store.dispatch(new SetHeroAction(hero)).toPromise();
    }

    async getHeroes() {
        this.store.dispatch(new GetHeroesAction()).toPromise();
    }

    async add(new_name: string) {        
        new_name = new_name.trim();
        if (!new_name) { return; }

        this.id = this.heroes.length > 0 ? Math.max(...this.heroes.map(hero => hero.id)) + 1 : 11;
        this.hero = new HeroModel({id: this.id, name: new_name});
        await this.store.dispatch(new AddHeroAction(this.hero)).toPromise();
        console.log('Bis HIER kommt er auf alle Fälle!');
        //this.GetHeroesHeroesEvent.emit();
        this.store.dispatch(new GetHeroesAction()).toPromise();
    }

    async delete(hero: HeroEntity) {
        this.heroes = this.heroes.filter(h => h !== hero);
        await this.store.dispatch(new DeleteHeroAction(hero)).toPromise();
    }

}
