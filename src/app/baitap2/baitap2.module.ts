import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
// import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { Baitap2Component } from './baitap2.component';
// import { IdexComponent } from './idex/idex.component';
import { IndexComponent } from './index/index.component';
// import { IndexSlideComponent } from './index/index-slide/index-slide.component';
import { SlideComponent } from './slide/slide.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, Baitap2Component, IndexComponent, SlideComponent],
  imports: [
    CommonModule
  ],
  exports:[
    Baitap2Component
  ]
})
export class Baitap2Module { }
