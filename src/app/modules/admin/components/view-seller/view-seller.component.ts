import { Component } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-view-seller',
  templateUrl: './view-seller.component.html',
  styleUrls: ['./view-seller.component.css']
})
export class ViewSellerComponent {
  sellerlist :any

  constructor(private service: AdminserviceService){}
  
  ngOnInit(){
    this.service.getSeller().subscribe(res=>{
      // console.log(res)
      this.sellerlist = res
    })
  }

}
