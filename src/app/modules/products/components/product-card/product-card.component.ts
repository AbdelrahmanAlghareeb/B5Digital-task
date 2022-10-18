import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCart } from 'src/app/state/products';
import { ProductsPageActions } from 'src/app/state/products/actions';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  addToCartButtonText:string = "Buy Now";
  @Input() product : Product | undefined
  cart:number[] | undefined
  constructor(private store:Store) { }

  addToCart(id:number){
    this.addToCartButtonText = "Added"
    setTimeout(() => {
      this.addToCartButtonText = "Buy Now"
    }, 1000);
    this.store.dispatch(ProductsPageActions.addToCart({id}))
  }
}
