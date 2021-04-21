import { CartComponent } from './cart/cart.component';
import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {

  constructor() { }
  @ViewChild('cart') cartComponent !: CartComponent;
  
  ngOnInit(): void {
  }

  handleSelect(product:any){
    this.cartComponent.handleSelect(product);
  }
}
