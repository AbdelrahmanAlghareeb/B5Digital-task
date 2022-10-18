import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFiltersComponent } from './components/products-filters/products-filters.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFiltersComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    InfiniteScrollModule
  ]
})
export class ProductsModule { }
