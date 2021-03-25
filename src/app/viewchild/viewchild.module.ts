import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle/toggle.component';
import { ViewchildComponent } from './viewchild.component';

@NgModule({
  declarations: [ToggleComponent, ViewchildComponent],
  imports: [CommonModule],
  exports: [ViewchildComponent],
})
export class ViewchildModule {}
