import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule,Routes } from "@angular/router";
import { ShopingCartComponent } from './shoping-cart.component';

// Khai báo router cho module
const routes: Routes = [
  {path:"shopping", component: ShopingCartComponent}
]


@NgModule({
  declarations: [ ShopingCartComponent,ProductListComponent, ProductItemComponent, CartComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  // exports:[ShopingCartComponent]
})
export class ShopingCartModule { }
