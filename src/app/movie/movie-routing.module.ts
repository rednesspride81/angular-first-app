import { MovieComponent } from './movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MovieComponent }];

@NgModule({
  // RouterModule.forRoot & RouterModule.forChild
  // Chỉ duy nhất app module sử dụng forRoot, tất cả những module còn lại sử dụng forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
