import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  isActive:boolean=true;
  color:string = "yellow";
  imgUrl:string="https://picsum.photos/100/200";
  template:string=`
    <div class="alert alert-warning">
      <span>error</span>
    </div>
  `

  constructor() { }

  ngOnInit(): void {
  }

}
