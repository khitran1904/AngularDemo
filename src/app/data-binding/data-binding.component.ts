import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  message : string ="hello";
  student: any={ name:"cobra",age:12}
  isActive:boolean = false;
  userName:string="";
  email:string='';
  address:string ="";
  district:string='';

  constructor() { }

  ngOnInit(): void {
  }
  changeMessage(){
    this.message= "khoi";
    console.log(this.message);
    
  }
  changeUserName(event:any){
    this.userName = event.target.value;
  }

  // changeEmail(){
  //   const email1 = document.getElementById("email");
  //   this.email=email1.value;
  // }
  changeEmail(emailRef: HTMLInputElement){
    console.log(emailRef);
    this.email=emailRef.value;
  }

  changeAddress(event:any){

  }

}
