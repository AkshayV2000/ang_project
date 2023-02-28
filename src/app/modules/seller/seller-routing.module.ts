import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SHomeComponent } from './components/s-home/s-home.component';
import { SelNavComponent } from './components/sel-nav/sel-nav.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { ViweProductsComponent } from './components/viwe-products/viwe-products.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [
  {
     path: '', component: SellerComponent,

     children: [
      { path: 's-home', component: SHomeComponent },
      { path: 's-nav',component: SelNavComponent},
      { path: 'add-p',component: AddProductsComponent},
      { path: 'change-password',component: ChangePasswordComponent},
      { path: 'profile',component: ProfileComponent},
      { path: 'view-order',component: ViewOrderComponent},
      { path: 'view-product',component: ViweProductsComponent},
      { path: 'update-stock',component: UpdateStockComponent}
     ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
