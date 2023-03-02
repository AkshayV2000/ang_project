import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  baseUrl = 'http://127.0.0.1:8000/common/'


  constructor(private http: HttpClient) { }
  
  
}
