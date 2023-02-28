import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-seller-reg',
  templateUrl: './seller-reg.component.html',
  styleUrls: ['./seller-reg.component.css']
})
export class SellerRegComponent {
  constructor(private service: CommonserviceService){}
  seller_pic : any;
  message: string = ""
  onImageChanged(event :any){
    this.seller_pic = event.target.files[0]
  }

  submit(formdata: any){
    // console.log(formdata)
    const sellerData = new FormData()
    sellerData.append('first_name',formdata['first_name'])
    sellerData.append('last_name',formdata['last_name'])
    sellerData.append('email',formdata['email'])
    sellerData.append('phone',formdata['phone'])
    sellerData.append('address',formdata['address'])
    sellerData.append('bank_name',formdata['bank_name'])
    sellerData.append('branch',formdata['branch'])
    sellerData.append('ifsc',formdata['ifsc'])
    sellerData.append('account_no',formdata['account_no'])
    sellerData.append('seller_pic',this.seller_pic)


    this.service.addSeller(sellerData).subscribe((res:{message:string})=>{
      console.log(res)
      this.message = res.message
    })
  }

}
