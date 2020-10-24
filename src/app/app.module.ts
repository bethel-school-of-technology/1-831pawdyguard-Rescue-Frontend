import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularMaterialModule } from './material.module';

import { AppFormComponent } from './volunteer/app-form/app-form.component';
import { DonationsFormComponent } from './donate/donations-form/donations-form.component';

import { DonationsComponent } from './donate/donations/donations.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent} from './auth/login/login.component';
import { VolMainComponent } from './volunteer/vol-main/vol-main.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AnimalsModule } from './animalsPage/animals.module';


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
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
