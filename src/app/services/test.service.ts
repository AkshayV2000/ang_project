import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  a = 0;
  increment(){
    this.a++
  }
  decrement(){
    this.a--
  }
}
