import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddCatogaryComponent } from './components/add-catogary/add-catogary.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ViewSellerComponent } from './components/view-seller/view-seller.component';
import { ViewCustomComponent } from './components/view-custom/view-custom.component';
import { ViewCatComponent } from './components/view-cat/view-cat.component';
import { ApproveSComponent } from './components/approve-s/approve-s.component';
import { FormsModule } from '@angular/forms';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddCatogaryComponent,
    AdminHomeComponent,
    ViewSellerComponent,
    ViewCustomComponent,
    ViewCatComponent,
    ApproveSComponent,
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
