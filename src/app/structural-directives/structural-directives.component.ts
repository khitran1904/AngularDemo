import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  isActive:boolean=true;
  isLogin:boolean=false;
  color:string="success";
  movieList:any[]=[
    {name:"phim 1",price:1000},
    {name:"phim 2",price:2000},
    {name:"phim 3",price:3000},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
