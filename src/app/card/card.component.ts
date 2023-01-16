import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/details.json';
import { CommonService } from '../service/common.service';
interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: Product[] = jsonData;
  message = '';
  constructor(
    private service: CommonService
  ) { }

  ngOnInit(): void {
  }

  //Call the service method for storing product to cart 
  addToCart(item: any, status: any) {
    try {
      this.service.addToCartOrBuy(item, status);
      this.toasterMessage("Item Added to cart");
    } catch (e) {
      console.error(e);
    }
  }

  //Call the service method for finally bying product 
  buy(item: any, status: any) {
    try {
      this.service.addToCartOrBuy(item, status);
      this.toasterMessage("Order Confirmed");
    } catch (e) {
      console.error(e);
    }
  }
  toasterMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 2000)
  }

}

