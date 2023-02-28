import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  baseUrl = 'http://127.0.0.1:8000/common/'


  constructor(private http: HttpClient) { }
  
  addcustomer(FormData: any) :Observable<any>{

    return this.http.post(this.baseUrl + 'customer_reg', FormData)
  }
  customerLogin(FormData: any) :Observable<any>{

    return this.http.post(this.baseUrl + 'customer_login', FormData)
  }
  homeCategory() :Observable<any>{

    return this.http.get(this.baseUrl + 'home_category')
  }
}
