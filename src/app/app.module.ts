import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { routes } from './routes/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { MultiplePricePipe } from './multiple-price.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    CardComponent,
    MultiplePricePipe
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
