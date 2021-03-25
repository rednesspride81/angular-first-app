import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-seats',
  templateUrl: './selected-seats.component.html',
  styleUrls: ['./selected-seats.component.scss'],
})
export class SelectedSeatsComponent implements OnInit {
  @Input() selectedSeats: any[] = [];
  @Output() onRemove = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  hanldeRemove(seatId: number) {
    this.onRemove.emit(seatId);
  }
}
