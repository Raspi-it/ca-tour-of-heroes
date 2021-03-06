import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HeroEntity } from 'src/app/core/domain/entity/hero.entity';

import {
  debounceTime, distinctUntilChanged, switchMap, tap
} from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { AppStore } from 'src/app/app.store';
import { PushMessageAction } from 'src/app/pages/components/messages/messages.component.state';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero.search.component.html',
  styleUrls: [ './hero.search.component.css' ]
})
export class HeroSearchComponent implements OnInit {

    heroes: HeroEntity[];
    private searchTerms = new Subject<string>();

    constructor(
      private readonly store: Store,
      private readonly http: HttpClient
    ) {}

    // Push a search term into the observable stream.
    search(term: string): void {
    //   this.searchTerms.next(term);
    }

    ngOnInit(): void {
      // this.heroes = this.searchTerms.pipe(
      //   // wait 300ms after each keystroke before considering the term
      //   debounceTime(300),

      //   // ignore new term if same as previous term
      //   distinctUntilChanged(),

      //   // switch to new search observable each time the term changes
      //   switchMap((term: string) => this.heroService.searchHeroes(term)),
      // );
    }

    async searchHeroes(term: string): Promise<Observable<HeroEntity[]> | void> {

      // if (!term.trim()) {
      //   // if not search term, return empty hero array.
      //   return of([]);
      // }
      // return this.http.get<HeroEntity[]>(`http://localhost:8080/api/hero/search/${term}`).pipe(
      //   tap(x => x.length ?
      //       this.store.dispatch(new PushMessageAction(`found heroes matching "${term}"`)) :
      //       this.store.dispatch(new PushMessageAction(`no heroes matching "${term}"`))
      // ));
    }
}
