import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Baitap1Component } from './baitap1.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent, SidebarComponent, Baitap1Component],
  imports: [
    CommonModule
  ],
  // exports: Khai báo các component có thể sử dụng đk bên ngoài module
  exports:[
    Baitap1Component
  ]
})
export class Baitap1Module { }
