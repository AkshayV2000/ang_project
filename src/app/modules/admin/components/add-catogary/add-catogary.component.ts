import { Component } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-add-catogary',
  templateUrl: './add-catogary.component.html',
  styleUrls: ['./add-catogary.component.css']
})
export class AddCatogaryComponent {
  // categoryform: any;
  constructor(private service: AdminserviceService){}
  categary_image : any;
  message: string = ""
  status: any
  onImageChanged(event :any){
    this.categary_image = event.target.files[0]
  }

  submit(formdata : any){
    console.log(formdata)
    const addcatData = new FormData()
    addcatData.append('category_name',formdata['category_name'])
    addcatData.append('category_des',formdata['category_des'])
    addcatData.append('category_image',this.categary_image)


    this.service.adminaddcat(addcatData).subscribe((res:{message:string,status:any})=>{
      console.log(res)
      this.message = res.message
      this.status= res.status
    })
  }

}
