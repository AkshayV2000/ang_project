import { Component } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  constructor(private service: CommonserviceService, private adminservice: AdminserviceService){}
  token: any
  categorylist: any
  ngOnInit(){
    this.token = localStorage.getItem('s_token')
    this.adminservice.getCategory().subscribe((res:{category : any})=>{
      this.categorylist = res
    })
  }


  product_image : any;
  onImageChanged(event :any){
    this.product_image = event.target.files[0]
  }

  submit(formdata : any){
    console.log(formdata)
    const productData = new FormData()
    productData.append('product_name',formdata['product_name'])
    productData.append('product_no',formdata['product_no'])
    productData.append('product_des',formdata['product_des'])
    productData.append('price',formdata['price'])
    productData.append('stock',formdata['stock'])
    productData.append('product_image',this.product_image)
    productData.append('seller',this.token)
    console.log(productData)


    this.service.addProduct(productData).subscribe((res:{statusCode: string})=>{
      console.log(res)
    })
  }

}
