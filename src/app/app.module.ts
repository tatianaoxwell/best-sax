import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementButtonComponent } from './core/incrementButton/increment-button/increment-button.component';
import { CartButtonComponent } from './header/cart-button/cart-button.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './header/side-nav/side-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutBssDevComponent } from './pages/about-bss-dev/about-bss-dev.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    IncrementButtonComponent,
    HeaderComponent,
    SideNavComponent,
    CartButtonComponent,
    PaymentSuccessComponent,
    AboutBssDevComponent,
    ContactUsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatIconModule,
	MatToolbarModule,
	MatSidenavModule,
	LayoutModule,
	MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
