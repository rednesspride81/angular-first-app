import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
} from '@angular/core';
import { SeatItemComponent } from '../seat-item/seat-item.component';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss'],
})
export class SeatListComponent implements OnInit {
  @Input() seatList: any[] = [];
  @Output() onSelect = new EventEmitter();
  @ViewChildren('seatRef') seatComponents!: SeatItemComponent[];
  constructor() {}

  ngOnInit(): void {}
  handleSelect(seat: any): void {
    this.onSelect.emit(seat);
  }

  // Hàm này sẽ đc component đc Bus dùng viewchild gọi tới
  hanldeRemove(seatId: number) {
    console.log(seatId);
    // View children tới coponent  SeatItem, tìm ghế muốn remove và set lại giá trị inSelected thành false
    this.seatComponents.forEach((item: SeatItemComponent) => {
      if (item.seat.id === seatId) {
        item.isSelected = false;
      }
    });
  }
}
