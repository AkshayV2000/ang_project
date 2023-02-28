import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute){}
  ngOnInit() {
    
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
  }
}
