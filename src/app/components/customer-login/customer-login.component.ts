import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/services/customerservice.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  
  
  constructor(private service : CustomerserviceService,private router:Router){}

  ngOnInit(): void {
  }
  message: any = ""
  submit(formdata: any){
  
   console.log(formdata)
  
this.service.customerLogin(formdata).subscribe((res:{ statusCode:number, C_tocken:string, cname:string})=>{
    // console.log(res)
    // this.message = res.statusCode
    if(res.statusCode == 200){
      localStorage.setItem('c_token',res.C_tocken)
      localStorage.setItem('customer_name',res.cname)
      this.router.navigate(['/main-home'])
    }
  })
}
  // statusCode' msg,'C_token':customer.id, 'cname': cname

}
