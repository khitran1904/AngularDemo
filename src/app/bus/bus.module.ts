import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusComponent } from './bus.component';
import { ListSeatComponent } from './list-seat/list-seat.component';
import { SeatComponent } from './seat/seat.component';
import { ListSeatSelectedComponent } from './list-seat-selected/list-seat-selected.component';
import { RouterModule,Routes } from "@angular/router";



//quản lí router theo module -> module tự khai báo routes cho nó
const routes: Routes = [
  {path:"bus",component:BusComponent},
];

@NgModule({
  declarations: [BusComponent, ListSeatComponent, SeatComponent, ListSeatSelectedComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[BusComponent]
})
export class BusModule { }
