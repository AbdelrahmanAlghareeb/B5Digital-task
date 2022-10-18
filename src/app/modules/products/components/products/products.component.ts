import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllCategories, getProducts, getProductsLimit, getProductsSkip, getProductsTotal } from 'src/app/state/products';
import { ProductsPageActions } from 'src/app/state/products/actions';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] | undefined;
  total:number | undefined;
  skip:number = 0
  limit:number = 10
  categories$: Observable<string[]> | undefined;

  constructor(private store: Store,private productsService:ProductsService) {}
  loading:boolean = false
  ngOnInit() {
    this.store.dispatch(ProductsPageActions.loadCategories())
    this.store.dispatch(ProductsPageActions.loadProducts({skip:this.skip,limit:10}));
    this.store.select(getProducts).subscribe(products=>{
      this.loading = false;
      this.products = products;
    })

    this.store.select(getProductsSkip).subscribe(skip=>this.skip = skip)
    this.store.select(getProductsLimit).subscribe(limit=>this.limit = limit)
    this.store.select(getProductsTotal).subscribe(total=>this.total = total)

    this.categories$ = this.store.select(getAllCategories)
  }
  onScroll($event:any){
    if(this.loading || (this.products != undefined && this.total != undefined && this.products.length >= this.total) ) return
    this.loading = true
    this.skip += this.limit
    this.store.dispatch(ProductsPageActions.loadProducts({skip:this.skip,limit:this.limit}));
  }

}
