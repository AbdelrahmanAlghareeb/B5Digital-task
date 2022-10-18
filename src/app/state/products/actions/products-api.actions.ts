import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/modules/products/models/product.model";


export const loadProductsSuccess = createAction(
  '[Products Api] Load Products Success',
  props<{ results:Product[], total:number }>()
);
export const loadProductsFailure = createAction(
  '[Products Api] Load Products Failure',
  props<{ error:string, }>()
);


export const searchProductsSuccess = createAction(
  '[Products Api] Search Products Success',
  props<{ results:Product[], total:number }>()
);
export const searchProductsFailure = createAction(
  '[Products Api] Search Products Failure',
  props<{ error:string, }>()
);


export const loadProductsByCategorySuccess = createAction(
  '[Products Api] load Products By Category Success',
  props<{ results:Product[], total:number }>()
);
export const loadProductsByCategoryFailure = createAction(
  '[Products Api] load Products By Category Failure',
  props<{ error:string }>()
);


export const searchProductsByCategorySuccess = createAction(
  '[Products Api] Search Products by Category Success',
  props<{ results:Product[], total:number }>()
);
export const searchProductsByCategoryFailure = createAction(
  '[Products Api] Search Products by Category Failure',
  props<{ error:string, }>()
);


export const loadCategoriesSuccess = createAction(
  '[Products Api] Load Categories Success',
  props<{ results:string[] }>()
);
export const loadCategoriesFailure = createAction(
  '[Products Api] Load Categories Failure',
  props<{ error:string }>()
);

export const getCartSuccess = createAction(
  '[Products Api] Get Cart Success',
  props<{ results:number[] }>()
);
export const getCartFailure = createAction(
  '[Products Api] Get Cart Failure',
  props<{ error: string }>()
);

export const addToCartSuccess = createAction(
  '[Products Api] Add To Cart Success',
  props<{ results:number[] }>()
);
export const AddToCartFailure = createAction(
  '[Products Api] Add To Cart Failure',
  props<{ error: string }>()
);
