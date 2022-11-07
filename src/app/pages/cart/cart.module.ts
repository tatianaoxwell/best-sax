import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProceedToCheckoutComponent } from './proceed-to-checkout/proceed-to-checkout.component';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    ProductCartComponent,
    ProceedToCheckoutComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
