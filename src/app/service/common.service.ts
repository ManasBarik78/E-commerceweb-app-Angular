import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cartItem: any[] = []
  buyItem: any[] = []
  constructor() { }
  addToCartOrBuy(item: any, status: any) {
    try {
      status == 1 ? this.buyProduct(item) : this.addNewProductToList(item)
    } catch (error) {
      console.log(error);
    }
  }

  //this perform when new product is added or have to increase the quantity
  addNewProductToList(item: any) {
    let index = this.cartItem.findIndex(data => data.id === item.productId);
    if (index > -1) {
      let quantity = this.cartItem[index].quantity + 1;
      const existingProduct = {
        id: item.productId,
        item: item,
        quantity
      }
      this.cartItem[index] = existingProduct;
    } else {
      const newProduct = {
        id: item.productId,
        item: item,
        quantity: 1
      }
      this.cartItem.push(newProduct);
    }
  }

  //Successfully buying the product
  buyProduct(item: any) {
    var product = {
      id: item.productId,
      item: item
    }
    this.buyItem.push(product)
  }
  //return which product and how many time a product added to cart.
  getAllCartItem() {
    return this.cartItem;
  }
  //return all buying product .
  getAllbuyItem() {
    return this.buyItem;
  }

  //increase cart item
  increaseQunatity(item: any) {
    let index = this.cartItem.findIndex(data => data.id === item.id);
    if (index > -1) {
      let quantity = this.cartItem[index].quantity + 1;
      const existingProduct = {
        id: item.id,
        item: item.item,
        quantity
      }
      this.cartItem[index] = existingProduct;
    }
  }
  //decrease cart item
  decreaseQuantity(item: any) {
    let index = this.cartItem.findIndex(data => data.id === item.id);
    if (index > -1) {
      let quantity = this.cartItem[index].quantity - 1;
      const existingProduct = {
        id: item.id,
        item: item.item,
        quantity
      }
      this.cartItem[index] = existingProduct;
    }
  }

  //delete cart item
  deleteCartItem(item: any) {
    let index = this.cartItem.findIndex(data => data.id === item.id);
    if (index > -1) {
      this.cartItem.splice(this.cartItem[index], 1)
    }
  }

  
}
