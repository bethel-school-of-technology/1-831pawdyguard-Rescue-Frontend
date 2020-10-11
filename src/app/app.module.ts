import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormComponent } from './volunteer/app-form/app-form.component';

import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DonationsComponent } from './donate/donations/donations.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header1/header1.component';


@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    DonationsComponent,
    HomeComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
