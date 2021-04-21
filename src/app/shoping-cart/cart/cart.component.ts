import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(product:any){
    const index = this.cart.findIndex((item)=>item.id == product.id);
    
    // nếu chưa tồn tại trong giỏ hàng
    if(index == -1){
      this.cart.push({...product,quantity:1})
    }else{
      this.cart[index].quantity +=1;
    }
  }
}

// khi dùng setState mới tạo ra dom ảo để so sánh, còn khi set trực tiếp thì ko tạo ra dom ảo => Reactjs