import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { SellerservicesService } from 'src/app/services/sellerservices.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent {
  constructor(private service: SellerservicesService){}

  productlist: any
  sellerId: any
  ngOnInit(){
    const sellerData = new FormData()
    this.sellerId=localStorage.getItem('s_token')

    sellerData.append('sid',this.sellerId)

    this.service.getProduct(sellerData).subscribe((res : {products: any})=>{
      this.productlist = res.products
      console.log(this.productlist)
    })
  }

  submit(formdata:any){

  }

}
