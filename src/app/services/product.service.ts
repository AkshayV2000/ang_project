import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://127.0.0.1:8000/common/'
  sellerUrl = 'http://127.0.0.1:8000/seller/'

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
}
