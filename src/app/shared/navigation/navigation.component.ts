import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() navigate = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.navigate.emit(false);
  }

  goForward() {
    this.navigate.emit(true);
  }

}
