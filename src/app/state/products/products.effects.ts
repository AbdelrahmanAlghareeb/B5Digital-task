import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../modules/products/services/products.service';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProductsApiActions, ProductsPageActions } from './actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.loadProducts),
      switchMap((state) =>{

          return this.productsService.getAllProducts(state.limit,state.skip).pipe(
            map((response) => ProductsApiActions.loadProductsSuccess({results:response.products,total:response.total})),
            catchError((error) => of(ProductsApiActions.loadCategoriesFailure({ error })))
          )
        }
      )
    )
  );
  searchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.searchProducts),
      switchMap((action) =>
        this.productsService.searchProducts(action.limit,action.skip,action.query).pipe(
          map((response) =>ProductsApiActions.searchProductsSuccess({results:response.products,total:response.total})),
          catchError((error) => of(ProductsApiActions.searchProductsFailure({ error })))
        )
      )
    )
  );
  loadProductsByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.loadProductsByCategory),
      switchMap((action) =>
        this.productsService.getProductsByCategory(action.limit,action.skip,action.category).pipe(
          map((response) =>ProductsApiActions.loadProductsByCategorySuccess({results:response.products,total:response.total})),
          catchError((error) => of(ProductsApiActions.loadProductsByCategoryFailure({ error })))
        )
      )
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.loadCategories),
      switchMap((action) =>
          this.productsService.getAllCategories().pipe(
            map((results) => ProductsApiActions.loadCategoriesSuccess({results})),
            catchError((error) => of(ProductsApiActions.loadCategoriesFailure({ error })))
          )
      )
    )
  );
  // getCart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ProductsPageActions.getCart),
  //     switchMap((action) =>
  //       this.productsService.getCart().pipe(
  //         map((results) =>ProductsApiActions.getCartSuccess({results})),
  //         catchError((error) => of(ProductsApiActions.loadCategoriesFailure({ error })))
  //       )
  //     )
  //   )
  // );
  // AddToCart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ProductsPageActions.addToCart),
  //     switchMap((action) =>
  //       this.productsService.getCart().pipe(
  //         map((results) =>ProductsApiActions.addToCartSuccess({results})),
  //         catchError((error) => of(ProductsApiActions.AddToCartFailure({ error })))
  //       )
  //     )
  //   )
  // );
}
