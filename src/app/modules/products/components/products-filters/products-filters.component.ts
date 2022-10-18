import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllCategories, getProductsLimit, getProductsSkip, getSelectedCategory } from 'src/app/state/products';
import { ProductsPageActions } from 'src/app/state/products/actions';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss']
})
export class ProductsFiltersComponent implements OnInit {
  categories$: Observable<string[]> | undefined;
  skip: number  = 0;
  limit: number = 10;
  selectedCategory:string | undefined;
  constructor(private store:Store){
  }
  ngOnInit(): void {
    this.store.dispatch(ProductsPageActions.loadCategories())
    this.categories$ = this.store.select(getAllCategories)

    this.store.select(getProductsLimit).subscribe(limit=>this.limit = limit)
    this.store.select(getProductsSkip).subscribe(skip=>this.skip = skip)
    this.store.select(getSelectedCategory).subscribe(selectedCate=>this.selectedCategory = selectedCate)
  }
  getProductsByCategory(category:string){
    if(category != this.selectedCategory) this.skip = 0
    this.store.dispatch(ProductsPageActions.loadProductsByCategory({category:category,skip:this.skip,limit:this.limit}))
  }

}
