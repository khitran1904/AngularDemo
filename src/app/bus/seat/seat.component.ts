import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  @Input() seat :any;
  @Output() onSelect = new EventEmitter();

  // Quản lí trạng thái chưa chọn hoặc đang chọn của ghế
  isSelect:boolean=false;
  constructor() { }

  
  ngOnInit(): void {
  }
  handleSelect(){
    this.isSelect=!this.isSelect;
    // truyền giá trị lên component cha
    this.onSelect.emit({...this.seat,isSelect:this.isSelect})
  }

}
