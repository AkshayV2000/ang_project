import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SHomeComponent } from './components/s-home/s-home.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { SelNavComponent } from './components/sel-nav/sel-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { ViweProductsComponent } from './components/viwe-products/viwe-products.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SellerComponent,
    SHomeComponent,
    AddProductsComponent,
    SelNavComponent,
    ProfileComponent,
    ViewOrderComponent,
    ChangePasswordComponent,
    UpdateStockComponent,
    ViweProductsComponent,
    
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule
  ]
})
export class SellerModule { }
