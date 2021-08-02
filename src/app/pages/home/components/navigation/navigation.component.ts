import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    @Output() changePageEventNavigation = new EventEmitter();

    title: string = "Tour of Heroes";

    constructor(private readonly store: Store) {}

    async changePage(load) {
      this.changePageEventNavigation.emit({load: load});
    }
}
