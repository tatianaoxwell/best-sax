import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProductDetailComponent } from './product-detail.component';


@NgModule({
  declarations: [
    CarouselComponent,
    AccordionComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule { }
