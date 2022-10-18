import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { of } from 'rxjs';
@Injectable()
export class ProductsService {
  baseUrl = environment.api;
  constructor(private http: HttpClient) { }

  getAllProducts(limit:number=10, skip:number=0){
    const params = new HttpParams()
    .set('limit', limit)
    .set('skip', skip)
    return this.http.get<ProductResponse>(`${this.baseUrl}/products`,{params})
  }

  searchProducts(limit:number=10, skip:number=0,query:string ){
    const params = new HttpParams()
    .set('limit', limit)
    .set('skip', skip)
    .set('q', query || '');
    return this.http.get<ProductResponse>(`${this.baseUrl}/products/search`,{params})
  }

  getProductsByCategory(limit:number=10, skip:number=0, category:string){
    const params = new HttpParams()
    .set('limit', limit)
    .set('skip', skip);
    return this.http.get<ProductResponse>(`${this.baseUrl}/products/category/${category}`,{params})
  }

  getAllCategories(){
    return this.http.get<string[]>(`${this.baseUrl}/products/categories`)
  }

  getCart(){
    const savedCart = localStorage.getItem('cart')
    let cart : number[] = savedCart ? JSON.parse(savedCart) : [];
    return of(cart)
  }

  addToCart(productId:number){
    const savedCart = localStorage.getItem('cart')
    let cart : number[] = savedCart ? JSON.parse(savedCart) : [];
    cart.push(productId)
    localStorage.setItem('cart',JSON.stringify(cart))
    return of(cart)
  }

}

export interface ProductResponse {
  skip:string,
  limit:number,
  total:number,
  products:Product[]
}
