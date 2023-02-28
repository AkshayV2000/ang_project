import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CatogaryComponent } from './components/catogary/catogary.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerRegComponent } from './components/seller-reg/seller-reg.component';
import { Login2Component } from './components/login2/login2.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CustomerRegComponent } from './components/customer-reg/customer-reg.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustmerHomeComponent } from './components/custmer-home/custmer-home.component';
import { TestingComponent } from './components/testing/testing.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';






@NgModule({
  declarations: [
    AppComponent,
    CatogaryComponent,
    ProductsComponent,
    CartComponent,
    MyorderComponent,
    ProductDetailesComponent,
    PageNotFoundComponent,
    HomeBodyComponent,
    MainHomeComponent,
    FooterComponent,
    NavBarComponent,
    SellerLoginComponent,
    SellerRegComponent,
    Login2Component,
    AdminLoginComponent,
    CustomerRegComponent,
    CustomerLoginComponent,
    CustmerHomeComponent,
    TestingComponent,
    ZipcodeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
