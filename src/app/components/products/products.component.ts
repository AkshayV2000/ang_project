import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  productlist :any

  constructor(private service: ProductService){}
  
  ngOnInit(){
    this.service.getProducts().subscribe(res=>{
      // console.log(res)
      this.productlist = res
    })
  }
  

}
