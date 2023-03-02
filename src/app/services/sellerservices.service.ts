import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerservicesService {

  baseUrl = 'http://127.0.0.1:8000/common/'
  sellerUrl = 'http://127.0.0.1:8000/seller/'


  constructor(private http: HttpClient) { }

  change_Password(formData:any, id:number):Observable<any>{

    return this.http.put(this.sellerUrl + 'change_password/'+id,formData)
  }
  addProduct(products: any) :Observable<any>{

    return this.http.post(this.sellerUrl + 'addproduct', products)

  }
  getProduct(formData:any):Observable<any>{
    return this.http.post(this.sellerUrl + 'Sview_products', formData)
  }
  
 

}


