import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  AllcartItem: any[] = []
  constructor(private service: CommonService) {
    this.AllcartItem = service.getAllCartItem();
    console.log(this.AllcartItem);

  }

  ngOnInit(): void {

  }


  increaseQuantity(item: any) {
    console.log(item);
    try {
        this.service.increaseQunatity(item)
    } catch (error) {

    }
  }


  decraeseQuantity(item: any) {
    console.log(item);
    try {
      if(item.quantity>1){
      this.service.decreaseQuantity(item)
      }
      else{
        console.log("not executed");
        
      }
    } catch (error) {

    }
  }

  removeCartItem(item:any){
    try {
      this.service.deleteCartItem(item);
    } catch (error) {
      
    }

  }
}
