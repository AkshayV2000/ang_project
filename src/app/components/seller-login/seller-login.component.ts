import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  constructor(private service: CommonserviceService, private router: Router) { }

  
  submit(formatData: any) {
    // const sellerData = new FormData


    // sellerData.append('user_name', formatData['user_name'])
    // sellerData.append('password', formatData['password'])
    // console.log(formatData)

    this.service.sellerLogin(formatData).subscribe((res: { statusCode: number, token: any, sname: string }) => {
      console.log(res)
      if (res.statusCode == 200) {
        localStorage.setItem('s_token', res.token.toString())
        localStorage.setItem('seller_name', res.sname)
        this.router.navigate(['/seller/s-home'])
      }
    })
  }

}
