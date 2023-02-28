import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/services/customerservice.service';

@Component({
  selector: 'app-catogary',
  templateUrl: './catogary.component.html',
  styleUrls: ['./catogary.component.css']
})
export class CatogaryComponent {
  category: any;
  constructor(private service : CustomerserviceService, private router: Router){}

ngOnInit(){
  this.service.homeCategory().subscribe((res:{category:any})=>{
    this.category = res.category
    console.log(res.category)
  })
}   
getId(categary_id:any){
  localStorage.setItem('category-id',categary_id)
  this.router.navigate(['/products'])
}

}
