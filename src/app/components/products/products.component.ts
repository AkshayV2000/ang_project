import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  


  constructor(private service: CommonserviceService){}

  productlist: any

  ngOnInit(){
    this.service.getProduct().subscribe((res: {products: any})=>{
      
      this.productlist = res.products
      console.log(this.productlist)
    })
  }
  

}
