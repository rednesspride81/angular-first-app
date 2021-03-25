import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any = {};

  // Kết hợp Output và EventEmitter để truyền dữ liệu lên component
  // EventEmitter: tự định nghĩa ra 1 event mới
  @Output() onSelectMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleSelectMovie() {
    // Đưa bộ phim vừa click lên component cha để hiển thị ra
    // Để đẩy data từ component con phải thông qua 1 event(EventEmitter)
    // Nếu có nhiều tham số thì tạo 1 object, truyền 1 mình object đó thôi
    this.onSelectMovie.emit(this.movie);
  }
}
