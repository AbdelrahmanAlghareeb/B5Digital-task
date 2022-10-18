import { createReducer, on } from '@ngrx/store';

import { Product } from 'src/app/modules/products/models/product.model';
import { ProductsApiActions, ProductsPageActions } from './actions';


export interface ProductState {
  limit: number;
  skip: number;
  products: Product[];
  categories:string[];
  cart:number[];
  total:number;
  error?: string | undefined;
  selectedCategory?: string | undefined;
  searchQuery?: string | undefined;
}

const initialState : ProductState = {
  limit: 10,
  skip: 0,
  total:0,
  products: [],
  categories: [],
  cart:[]
}


export const productReducer = createReducer<ProductState>(
  // Supply the initial state
  initialState,


  // Handle Page Actions
  on(ProductsPageActions.loadProducts,(state,action)=>({
    ...state,
    skip : action.skip,
    limit : action.limit
  })),
  on(ProductsPageActions.searchProducts,(state,action)=>({
    ...state,
    skip : action.skip,
    limit : action.limit,
    searchQuery : action.query
  })),
  on(ProductsPageActions.loadProductsByCategory,(state,action)=>({
    ...state,
    skip : action.skip,
    limit : action.limit,
    selectedCategory : action.category
  })),

  on(ProductsPageActions.addToCart,(state,action)=>({
    ...state,
    cart : [...state.cart, action.id]
  })),

  // Handle API Actions
  on(
    ProductsApiActions.loadProductsSuccess,
    ProductsApiActions.searchProductsSuccess,
    ProductsApiActions.loadProductsByCategorySuccess,
    ProductsApiActions.searchProductsByCategorySuccess,
    (state,action) :ProductState => {
      return {
        ...state,
        products : state.skip == 0 ? action.results :  [...state.products, ...action.results],
        total:action.total
      }
    }),
  on(
    ProductsApiActions.loadProductsFailure,
    ProductsApiActions.searchProductsFailure,
    ProductsApiActions.loadProductsByCategoryFailure,
    ProductsApiActions.searchProductsByCategoryFailure,
    ProductsApiActions.loadCategoriesFailure,
    ProductsApiActions.AddToCartFailure,
    ProductsApiActions.getCartFailure,
    (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(ProductsApiActions.loadCategoriesSuccess,(state,action) :ProductState => ({
      ...state,
      categories : action.results
  })),

);
