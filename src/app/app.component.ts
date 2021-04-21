import { Component } from '@angular/core';

// @Component : Khai báo đây là 1 component
@Component({
  // selector : tên component sẽ nhúng và html
  selector: 'app-root',
  // templateUrl : liên kết file html vào component
  templateUrl: './app.component.html',
  // styleUrls : liên kết file css và scss vào component
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe53-angular';
}
