import { SubReddit } from './../classes/subreddit.class';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent implements OnInit {
  @Input() options: SubReddit[];
  @Output() change = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  setOption(opt) {
    this.change.emit(opt.url);
  }

}
