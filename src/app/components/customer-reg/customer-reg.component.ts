import { Component } from '@angular/core';
import { CustomerserviceService } from 'src/app/services/customerservice.service';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent {
  customer_pic: any;
  constructor(private service: CustomerserviceService){}
  message: string = ""
  onImageChanged(event :any){
    this.customer_pic = event.target.files[0]
  }

  submit(formdata: any){
    // console.log(formdata)
    const customerData = new FormData()
    customerData.append('first_name',formdata['first_name'])
    customerData.append('last_name',formdata['last_name'])
    customerData.append('email',formdata['email'])
    customerData.append('phone',formdata['phone'])
    customerData.append('address',formdata['address'])
    customerData.append('password',formdata['password'])
    customerData.append('customer_pic',this.customer_pic)


    this.service.addcustomer(customerData).subscribe((res:{message:string,status:number})=>{
      console.log(res)
      this.message = res.message
    })
  }
  

}
