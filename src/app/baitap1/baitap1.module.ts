import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { Baitap1Component } from './baitap1.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    Baitap1Component,
  ],
  imports: [CommonModule],
  // Khai báo các component có thể sử dụng ở bên ngoài module
  exports: [
    // HeaderComponent,
    // SidebarComponent,
    // ContentComponent,
    // FooterComponent,
    Baitap1Component,
  ],
})
export class Baitap1Module {}
