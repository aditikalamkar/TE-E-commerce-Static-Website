import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FooterComponent } from './component/footer/footer.component';
import { LogoutComponent } from './component/logout/logout.component';

import { ContactComponent } from './component/contact/contact.component';
import { OrderTrackingComponent } from './component/order-tracking/order-tracking.component';
import { BindingWireComponent } from './component/binding-wire/binding-wire.component';
import { CartComponent } from './component/cart/cart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { NailsProductComponent } from './component/nails-product/nails-product.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'orderTracking', component: OrderTrackingComponent },
  { path: 'nails', component: NailsProductComponent },
  { path: 'wire', component: BindingWireComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
