import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ClearMessageAction, MessagesComponentState } from './messages.component.state';

@Component({
  selector: 'app-footer-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    @Select(MessagesComponentState.messages) messages$: Observable<string[]>;

    constructor(
      private readonly store: Store
    ) {}

    ngOnInit() {
    }

    async clearMessage() {
      await this.store.dispatch(new ClearMessageAction);
    }

}
