import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllCategories, getCart, getProductsLimit, getProductsSkip, getProductsTotal, getSelectedCategory } from 'src/app/state/products';
import { ProductsPageActions } from 'src/app/state/products/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories$: Observable<string[]> | undefined;
  skip: number  = 0;
  limit: number = 10;
  selectedCategory:string | undefined;
  cart:number[] | undefined

  constructor(private store : Store){
  }

  ngOnInit(): void {

    this.store.dispatch(ProductsPageActions.loadCategories())
    this.categories$ = this.store.select(getAllCategories)
    this.store.select(getProductsLimit).subscribe(limit=>this.limit = limit)
    this.store.select(getProductsSkip).subscribe(skip=>this.skip = skip)

    this.store.select(getSelectedCategory).subscribe(selectedCate=>{
      this.selectedCategory = selectedCate
    })
    this.store.select(getCart).subscribe(res=>{
      this.cart = res
    })
  }

  getProductsByCategory(category:string){
    if(category != this.selectedCategory) this.skip = 0
    this.store.dispatch(ProductsPageActions.loadProductsByCategory({category:category,skip:this.skip,limit:this.limit}))
  }
  search($event:any ){
    this.store.dispatch(ProductsPageActions.searchProducts({limit:this.limit,skip:this.skip,query:$event.target.value}))
  }
}
