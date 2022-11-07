import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProceedToCheckoutComponent } from './proceed-to-checkout/proceed-to-checkout.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

const routes: Routes = [
	{path: '', component: ProductCartComponent},
	{path: 'checkout', component: ProceedToCheckoutComponent},
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
