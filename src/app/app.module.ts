import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementButtonComponent } from './core/incrementButton/increment-button/increment-button.component';
import { CartButtonComponent } from './header/cart-button/cart-button.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './header/side-nav/side-nav.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementButtonComponent,
    HeaderComponent,
    SideNavComponent,
    CartButtonComponent,
    PaymentSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
