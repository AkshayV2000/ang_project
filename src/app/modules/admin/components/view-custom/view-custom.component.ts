import { Component } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-view-custom',
  templateUrl: './view-custom.component.html',
  styleUrls: ['./view-custom.component.css']
})
export class ViewCustomComponent {
  customerlist :any

  constructor(private service: AdminserviceService){}
  
  ngOnInit(){
    this.service.getCustomer().subscribe(res=>{
      // console.log(res)
      this.customerlist = res
    })
  }

}
