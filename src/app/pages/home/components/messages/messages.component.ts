import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    @Input() messages: string[];
    @Output() clearMessageEvent = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    clearMessage() {
      this.clearMessageEvent.emit();
    }

}
