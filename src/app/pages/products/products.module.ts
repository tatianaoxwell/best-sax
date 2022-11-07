import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
