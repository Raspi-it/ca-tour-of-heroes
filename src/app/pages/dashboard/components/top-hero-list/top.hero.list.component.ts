import { Component, Input, OnChanges } from '@angular/core';
import { HeroEntity } from 'src/app/core/domain/entity/hero.entity';

@Component({
  selector: 'app-top-hero-list',
  templateUrl: './top.hero.list.component.html',
  styleUrls: [ '../../dashboard.page.css' ] //../../dashboard.page.css
})
export class TopHeroListComponent implements OnChanges {

    @Input() heroes: HeroEntity[];

    constructor() {
    }

    ngOnChanges() {
      if(this.heroes){
        this.heroes = this.heroes.slice(1, 5);
      }
    }
}
