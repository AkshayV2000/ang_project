import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CartComponent } from './components/cart/cart.component';
import { CatogaryComponent } from './components/catogary/catogary.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerRegComponent } from './components/customer-reg/customer-reg.component';
import { Login2Component } from './components/login2/login2.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';
import { ProductsComponent } from './components/products/products.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerRegComponent } from './components/seller-reg/seller-reg.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';

const routes: Routes = [
 { path: '', redirectTo: 'main-home', pathMatch: 'full'},
 { path: 'main-home',component: MainHomeComponent},
 { path: 'catogary',component: CatogaryComponent},
 { path: 'cart',component: CartComponent},
 { path: 'admin-log',component: AdminLoginComponent},
 { path: 'login',component: Login2Component},
 { path: 'customerlogin',component: CustomerLoginComponent},
 { path: 'customer-register',component: CustomerRegComponent},
 { path: 'seller-reg',component: SellerRegComponent},
 {path: 'seller-login',component: SellerLoginComponent},
 { path: 'myorder',component: MyorderComponent},
 { path: 'product',component: ProductsComponent},
 { path: 'product-details',component: ProductDetailesComponent},
 { path: 'zipcode',component: ZipcodeComponent},
 { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
 { path: 'seller', loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule) },
 { path : '**',component : PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
