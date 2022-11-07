import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { ProceedToCheckoutComponent } from './proceed-to-checkout/proceed-to-checkout.component';

const routes: Routes = [
	{path: '', component: CartComponent},
	{path: 'checkout', component: ProceedToCheckoutComponent},
	{path: 'empty', component: EmptyCartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
