import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { SellerservicesService } from 'src/app/services/sellerservices.service';

@Component({
  selector: 'app-viwe-products',
  templateUrl: './viwe-products.component.html',
  styleUrls: ['./viwe-products.component.css']
})
export class ViweProductsComponent {
  productlist :any
  sellerId: any

  constructor(private service: SellerservicesService){}
  
  ngOnInit(){
    const sellerData = new FormData()
    this.sellerId = localStorage.getItem('s_token')

    sellerData.append('Sid',this.sellerId)

    this.service.getProduct(sellerData).subscribe((res : {products: any})=>{
      this.productlist = res.products
      console.log(this.productlist)
    })
  }
}
