import { BusComponent } from './bus/bus.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
// Để sử dụng Two-way-binding
import { FormsModule } from "@angular/forms";
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { Baitap6Module } from './baitap6/baitap6.module';
import { CardComponent } from './card/card.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { InteractionModule } from './interaction/interaction.module';
import { BusModule } from './bus/bus.module';
import { ShopingCartModule } from './shoping-cart/shoping-cart.module';




// Module : là 1 group quản lí các component , directives, pipe,... ta có thể gom các thành phần có cùng chức năng
// lại trong module

// @NgModule : Khai báo cho Angular biết class AppModule là 1 module
@NgModule({
  //  declarations: Là 1 mảng, nơi khai bác các component do module quản lí
  // AppComponent đang được AppModule quản lí
  // 1 component phải đk 1 module quản lí
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    CardComponent,
    HighlightDirective,
    
  ],

// imports : là nơi khai báo các module cần sử dụng
// HomeModule : HeaderComponent, FooterComponent,....
// => Để sử dụng các component trên trong AppComponent cần gắn HomeComponent và mảng imports

// Ngoài các module tự tạo sẽ có các module do angular cung cấp : RouterModule, HttpClientModule, FromsModule,... để sử dụng cần gắn vai mảng import
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Baitap1Module,
    Baitap2Module,
    Baitap6Module,
    InteractionModule,
    BusModule,
    ShopingCartModule
  ],

  // providers : Nơi khai báo các service
  providers: [],
  // bootstrap : Khai báo AppComponent là component khởi chạy đầu tiên
  bootstrap: [AppComponent]
})
export class AppModule { }
