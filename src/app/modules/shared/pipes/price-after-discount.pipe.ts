import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceAfterDiscount'
})
export class PriceAfterDiscountPipe implements PipeTransform {

  transform(price: number, discountPercentage: number) {
    const priceAfterDiscount = price - price*(discountPercentage / 100)
    return discountPercentage ? Math.round(( (priceAfterDiscount + Number.EPSILON) * 100) / 100) : price;
  }

}
