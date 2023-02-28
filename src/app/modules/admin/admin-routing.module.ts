import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCatogaryComponent } from './components/add-catogary/add-catogary.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ApproveSComponent } from './components/approve-s/approve-s.component';
import { ViewCatComponent } from './components/view-cat/view-cat.component';
import { ViewCustomComponent } from './components/view-custom/view-custom.component';
import { ViewSellerComponent } from './components/view-seller/view-seller.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,

    children: [
      { path: 'add-cat', component: AddCatogaryComponent },
      { path: 'a-home',component: AdminHomeComponent},
      { path: 'approve',component: ApproveSComponent},
      { path: 'view-cust',component: ViewCustomComponent},
      { path: 'view-seller',component: ViewSellerComponent},
      { path: 'view-cat',component: ViewCatComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
