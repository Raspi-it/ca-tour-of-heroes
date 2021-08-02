import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { HeroEntity } from 'src/app/core/domain/entity/hero.entity';

@Component({
  selector: 'app-top-hero-list',
  templateUrl: './top.hero.list.component.html',
  styleUrls: [ '../../dashboard.page.css' ] //../../dashboard.page.css
})
export class TopHeroListComponent implements OnInit, OnChanges {

    @Input() heroes: HeroEntity[];
    @Output() changePageEventHeroList = new EventEmitter();

    constructor(private readonly store: Store) {
    }

    ngOnInit(): void {}

    async changePage(load, hero) {
      this.changePageEventHeroList.emit({load: load, hero: hero});
    }

    ngOnChanges() {
      if(this.heroes){
        this.heroes = this.heroes.slice(1, 5);
      }
    }
}
