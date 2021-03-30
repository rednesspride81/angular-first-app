import { Baitap1Module } from './baitap1/baitap1.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import formsModule để sử dụng tính năng 2 way binding
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { CardComponent } from './card/card.component';
import { TestDirectiveDirective } from './test-directive/test-directive.directive';
import { MovieModule } from './movie/movie.module';
import { ViewchildModule } from './viewchild/viewchild.module';
import { BusModule } from './bus/bus.module';
// type decorate - Khai báo cho angular biết đây là 22 cm mode
// Component bắt buộc phải được quản lý bởi 1 modules
//
@NgModule({
  // Nơi khái báo cacc compomnet ,do module quản lý
  declarations: [
    AppComponent,
    DemoComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    CardComponent,
    TestDirectiveDirective,
  ],
  // Nơi khai báo các module cần quản lý
  // module do angular cung cấp: RouterModule, FormsModule, HttpClientModule
  // Những model do mình tạo: homeModule, MovieModule,...
  // Nơi khai báo các module cần sử dụng
  imports: [
    BrowserModule,
    AppRoutingModule,
    Baitap1Module,
    Baitap2Module,
    FormsModule,
    MovieModule,
    ViewchildModule,
    BusModule,
  ],

  // Nơi khai báo các services cần sử dụng
  providers: [],
  // Khai báo app-component khởi chạy đầu tiên
  bootstrap: [AppComponent],
})
export class AppModule {}
