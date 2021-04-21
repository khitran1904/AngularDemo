import { ListSeatSelectedComponent } from './list-seat-selected/list-seat-selected.component';
import { ListSeatComponent } from './list-seat/list-seat.component';
import { Component, OnInit, ViewChild,ViewChildren } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  @ViewChild('listSeatSelected') listSeatSelected !: ListSeatSelectedComponent;
  @ViewChild('listSeat') listSeat!:ListSeatComponent;
  constructor() { }

  ngOnInit(): void {
  }
  handleSelect(seat:any){
    // Cần viewChild tới component list-seat-selected và gọi hàm handleSelect của component này
    this.listSeatSelected.handleSelect(seat);
  }
  handlerRemove(idSeat:number){
    // Cần viewChild tời component list-seat và gọi hàm handlerRemove của component con này
    this.listSeat.handlerRemove(idSeat);
  }
}
