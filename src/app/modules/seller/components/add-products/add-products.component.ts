import { Component, LOCALE_ID } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { SellerservicesService } from 'src/app/services/sellerservices.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  constructor(private service: SellerservicesService, private adminservice: AdminserviceService) { }
  token: any
  categorylist: any
  ngOnInit() {
    this.token = localStorage.getItem('s_token')
    this.adminservice.getCategory().subscribe((res: { category: any }) => {
      this.categorylist = res.category
      // console.log(res)
    })
  }


  product_image: any;
  onImageChanged(event: any) {
    this.product_image = event.target.files[0]
  }

  submit(dataform: any) {
    console.log(dataform)

    const productData = new FormData()
    productData.append('product_name', dataform['product_name'])
    productData.append('category',dataform['category'])
    productData.append('product_no', dataform['product_no'])
    productData.append('product_des', dataform['product_des'])
    productData.append('price', dataform['price'])
    productData.append('stock', dataform['stock'])
    productData.append('product_image', this.product_image)
    productData.append('seller', this.token)
    console.log(this.token)


    this.service.addProduct(productData).subscribe((res: { statusCode: string }) => {
      console.log(res)
    })
  }

}
