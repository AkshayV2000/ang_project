import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  show_div =false
   div(){
    if(this.show_div == false){
      this.show_div = true
    }
    else {
      this.show_div = false
    }
   }

}
