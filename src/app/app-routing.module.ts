import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBssDevComponent } from './pages/about-bss-dev/about-bss-dev.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
{path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
{path: 'products/:id', loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)},
{path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)},
{path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)},
{path: 'about', component: AboutBssDevComponent},
{path: 'contact-us', component: ContactUsComponent},
{ path: '', redirectTo: 'products', pathMatch: 'full' },
{path: '**', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
