import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-seat-selected',
  templateUrl:'./list-seat-selected.component.html',
  styleUrls: ['./list-seat-selected.component.scss']
})
export class ListSeatSelectedComponent implements OnInit {

  listSeat:any[]=[];
  @Output() onRemove = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }
  handleSelect(seat:any){
    if(seat.isSelect == true){
      this.listSeat.push(seat);
    }
    else{
      this.listSeat = this.listSeat.filter(
        (item)=> item.id !== seat.id
      )
    }
  }
  handlerRemove(idSeat:number){
    // Xóa ghế khỏi mảng
    this.listSeat = this.listSeat.filter(
      (item)=> item.id !== idSeat
    )

    // Output idSeat lên component cha
    this.onRemove.emit(idSeat);
  }
}
