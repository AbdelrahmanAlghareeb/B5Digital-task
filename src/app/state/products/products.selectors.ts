import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './products.reducer';

export const selectProducts = createFeatureSelector<ProductState>('products');

export const getAllCategories = createSelector(selectProducts,state=>state.categories)
export const getCart = createSelector(selectProducts,state=>state.cart)
export const getProducts = createSelector(selectProducts,state=> state.products)
export const getProductsLimit = createSelector(selectProducts,state=>state.limit)
export const getProductsSkip = createSelector(selectProducts,state=>state.skip)
export const getProductsTotal = createSelector(selectProducts,state=>state.total)

export const getSelectedCategory = createSelector(selectProducts,state=>state.selectedCategory)
export const getError = createSelector(
  selectProducts,
  state => state.error
);
