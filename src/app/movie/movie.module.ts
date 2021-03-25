import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    MovieItemComponent,
    AddMovieComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MovieComponent],
})
export class MovieModule {}
