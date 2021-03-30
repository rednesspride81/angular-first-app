import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, LayoutComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
