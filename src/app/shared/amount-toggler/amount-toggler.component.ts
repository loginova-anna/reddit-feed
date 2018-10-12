import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-amount-toggler',
  templateUrl: './amount-toggler.component.html',
  styleUrls: ['./amount-toggler.component.scss']
})
export class AmountTogglerComponent implements OnInit {
  options = [10, 25, 50];
  selected = 10;
  @Output() option = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  setOption(opt: number) {
    this.selected = opt;
    this.option.emit(opt);
  }

}
