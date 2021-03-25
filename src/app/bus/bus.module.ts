import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusComponent } from './bus.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { SeatItemComponent } from './seat-item/seat-item.component';
import { SelectedSeatsComponent } from './selected-seats/selected-seats.component';

@NgModule({
  declarations: [
    BusComponent,
    SeatListComponent,
    SeatItemComponent,
    SelectedSeatsComponent,
  ],
  imports: [CommonModule],
  exports: [BusComponent],
})
export class BusModule {}
