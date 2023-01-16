import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import { OrderComponent } from '../order/order.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {



}
