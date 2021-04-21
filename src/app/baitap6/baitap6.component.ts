import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss']
})
export class Baitap6Component implements OnInit {

  form: any={
    id:"",
    name:"",
    gia:""
  }
  productList:any[]=[];
  constructor() { }

  addProduct(){
    this.productList.push(this.form);
    this.form={
      id:"",
      name:"",
      gia:""
    }
    
  }

  ngOnInit(): void {
  }

}
