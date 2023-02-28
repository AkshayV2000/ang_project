import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  message:any;
  msg:any;

  constructor(private service:CommonserviceService){}

  submit(formData:any){
    console.log(formData)

    let id = parseInt(localStorage.getItem('s_token')!)
    // console.log(id)

    this.service.change_Password(formData,id).subscribe((res:{msg:string})=>{
      this.message = res.msg
    })
    if (this.message=='successfully password changed'){
      var msg = true
    }
  }

}
