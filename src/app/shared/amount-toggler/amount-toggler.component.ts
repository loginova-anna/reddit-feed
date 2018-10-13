import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-amount-toggler',
  templateUrl: './amount-toggler.component.html',
  styleUrls: ['./amount-toggler.component.scss']
})
export class AmountTogglerComponent implements OnInit {
  options = [10, 25, 50];
  @Input() selected;
  @Output() change = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log('selected', this.selected);
  }

  setOption(opt: number) {
    this.selected = opt;
    this.change.emit(opt);
  }

}
