import { createAction, props } from '@ngrx/store';


export const loadProducts = createAction(
  '[Products Page] Load Products',
  props<{ limit:number, skip:number }>()
);

export const searchProducts = createAction(
  '[Header] Search Products',
  props<{ limit:number, skip:number, query:string }>()
);

export const loadProductsByCategory = createAction(
  '[Header] Load Products By Category',
  props<{ limit:number, skip:number, category:string }>()
);

export const loadCategories = createAction(
  '[Products Page] Load Categories'
);

export const getCart = createAction(
  '[Header] Get Cart',
  props<{ id: number }>()
);

export const addToCart = createAction(
  '[Products Page] Add To Cart',
  props<{ id: number }>()
);
