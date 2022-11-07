import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    ShippingFormComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
