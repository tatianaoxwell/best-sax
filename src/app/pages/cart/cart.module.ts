import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProceedToCheckoutComponent } from './proceed-to-checkout/proceed-to-checkout.component';
import { CartComponent } from './cart.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';


@NgModule({
  declarations: [
    ProductCartComponent,
    ProceedToCheckoutComponent,
    CartComponent,
    EmptyCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
