import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss'],
})
export class SeatItemComponent implements OnInit {
  @Input() seat: any = {};
  @Output() onSelect = new EventEmitter();
  // Trạng thái ghế chưa chọn hoặc đang được chọn
  isSelected: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  handleSelect() {
    this.isSelected = !this.isSelected;
    // Đẩy ghế vừa chọn lên component cha
    this.onSelect.emit({ ...this.seat, isSelected: this.isSelected });
  }
}
