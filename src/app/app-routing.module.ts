import { HelloComponent } from './hello/hello.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusComponent } from './bus/bus.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

const routes: Routes = [
  // path ko được có dấu / đằng trước
  // Không cần export component khi component được gắn vào routing

  // Cách 1: routing theo component
  // {path:"shopping", component:ShopingCartComponent},
  // {path:"bus", component:BusComponent},
  {path:"", component:HelloComponent},
];

@NgModule({
  //  cung cấp 2 hàm là forRoot và forChild
  // forRoot : chỉ khai báo duy nhất ở app-routing.module.ts - vì đây là module routing gốc của ứng dụng
  // forChild : khai báo cho các routing module con
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
