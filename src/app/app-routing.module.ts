import { AdminModule } from './admin/admin.module';
import { MainModule } from './main/main.module';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieModule } from './movie/movie.module';

const routes: Routes = [
  // path: không có dấu / đằng trước
  // khi gắn component vào trong route , ta không cần exports component đó
  // Cách 1: routing theo component
  { path: 'baitap1', component: Baitap1Component },
  { path: 'baitap2', component: Baitap2Component },

  // Cách 2: routing theo module
  // Khi gắn module vào trong routing, ta không cần gắn module đó vào mảng import trong app module
  { path: 'movie', loadChildren: () => MovieModule },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '', loadChildren: () => MainModule },
  // { path: '', pathMatch = "full", loadChildren: () => MainModule },
];

@NgModule({
  // RouterModule.forRoot & RouterModule.forChild
  // Chỉ duy nhất app module sử dụng forRoot, tất cả những module còn lại sử dụng forChild
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
