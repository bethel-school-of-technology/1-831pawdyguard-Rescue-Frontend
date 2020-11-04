import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AngularMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/navigation/header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { AnimalsModule } from './animals/animals.module';

import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';

import { AppFormComponent } from './volunteer/app-form/app-form.component';
import { DonationsFormComponent } from './donate/donations-form/donations-form.component';
import { DonationsComponent } from './donate/donations/donations.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent} from './auth/login/login.component';
import { VolMainComponent } from './volunteer/vol-main/vol-main.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    DonationsComponent,
    HeaderComponent,
    DonationsFormComponent,
    HomeComponent,
    FooterComponent,
    VolMainComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    LayoutComponent,
    SidenavListComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    AnimalsModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})

export class AppModule {}
