import { Component } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-view-cat',
  templateUrl: './view-cat.component.html',
  styleUrls: ['./view-cat.component.css']
})
export class ViewCatComponent {
  categorylist :any

  constructor(private service: AdminserviceService){}
  
  ngOnInit(){
    this.service.getCategory().subscribe(res=>{
      // console.log(res)
      this.categorylist = res
    })
  }

}
