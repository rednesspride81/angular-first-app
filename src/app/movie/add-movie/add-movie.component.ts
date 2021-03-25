import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Output() eventAddMovie = new EventEmitter();
  form: any = { name: '', price: '', img: '' };
  constructor() {}

  ngOnInit(): void {}

  handleAddMovie() {
    this.eventAddMovie.emit(this.form);
  }
}
