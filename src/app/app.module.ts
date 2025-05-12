import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';

import { RegistrationComponent } from './component/registration/registration.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './component/product/product.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ContactComponent } from './component/contact/contact.component';
import { OrderTrackingComponent } from './component/order-tracking/order-tracking.component';
import { HomeComponent } from './component/home/home.component';
import { NailsProductComponent } from './component/nails-product/nails-product.component';
import { BindingWireComponent } from './component/binding-wire/binding-wire.component';
import { CartComponent } from './component/cart/cart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    ProductComponent,
    LogoutComponent,
    ContactComponent,
    OrderTrackingComponent,
    HomeComponent,
    NailsProductComponent,
    BindingWireComponent,
    CartComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
