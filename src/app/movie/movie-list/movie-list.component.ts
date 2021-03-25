import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  // Khai báo Input để nhận data từ component cha truyền xuống
  @Input() movies: any[] = [];
  selectedMovie: any = null;
  constructor() {}

  ngOnInit(): void {}
  handleSelectMovie(movie: any) {
    console.log(movie);
    this.selectedMovie = movie;
  }
}
