import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeValidatorService {
  constructor() { }

  private validZipcode = ['00001','00002','00003','00004'];
  fakeHttp(value:string){
    return of(this.validZipcode.includes(value)).pipe(delay(5000));

  }
  
}
