import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  baseUrl = 'http://127.0.0.1:8000/common/'
  sellerUrl = 'http://127.0.0.1:8000/seller/'


  constructor(private http: HttpClient) { }

  addSeller(FormData: any) :Observable<any>{

    return this.http.post(this.baseUrl + 'seller_reg', FormData)
  }
  sellerLogin(FormData: any) :Observable<any>{

    return this.http.post(this.baseUrl + 'seller_login', FormData)
  }
  addcustomer(FormData: any) :Observable<any>{

    return this.http.post(this.baseUrl + 'customer_reg', FormData)
  }
  customerLogin(FormData: any) :Observable<any>{

    return this.http.post(this.baseUrl + 'customer_login', FormData)
  }
  homeCategory() :Observable<any>{

    return this.http.get(this.baseUrl + 'home_category')
  }
  getProduct() :Observable<any>{
    return this.http.get(this.baseUrl + 'view_products')
  }
  
 

}
