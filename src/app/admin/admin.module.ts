import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { MovieComponent } from './movie/movie.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [UsersComponent, MovieComponent, LayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
