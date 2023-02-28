import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonserviceService } from './commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  baseUrl = 'http://127.0.0.1:8000/ang_eco_admin/'


  constructor(private http: HttpClient) { }

  adminaddcat(FormData: any) :Observable<any>{

    return this.http.post(this.baseUrl + 'add_category', FormData)

  }
  getCategory() :Observable<any>{

    return this.http.get(this.baseUrl + 'view_category')
  }  
  getCustomer(){
    
    return this.http.get(this.baseUrl + 'view_customer')
  } 
  getSeller(){

    return this.http.get(this.baseUrl + 'view_seller')
  } 
}
