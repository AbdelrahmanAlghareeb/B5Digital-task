import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceAfterDiscountPipe } from './pipes/price-after-discount.pipe';



@NgModule({
  declarations: [
    PriceAfterDiscountPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PriceAfterDiscountPipe
  ]
})
export class SharedModule { }
