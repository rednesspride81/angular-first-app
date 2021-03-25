import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movies: any[] = [
    {
      id: 1,
      name: 'Báo ứng',
      price: 8000,
      img: '/assets/img/bao-ung-karma-16158830086452_215x318.jpg',
    },
    {
      id: 2,
      name: 'Căn phòng ma ám',
      price: 8000,
      img:
        '/assets/img/can-phong-ma-am-stigmatized-properties-c16-16113060341189_215x318.png',
    },
    {
      id: 3,
      name: 'Gái già lắm chiêu',
      price: 8000,
      img:
        '/assets/img/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg',
    },
    {
      id: 4,
      name: 'Phiêu lưu thú vị',
      price: 8000,
      img:
        '/assets/img/oi-troi-oi-chuyen-phieu-luu-day-thu-vi-16164736349882_215x318.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  handleAddMovie(movie: any) {
    this.movies.push({ ...movie, id: this.movies.length + 1 });
  }
}
