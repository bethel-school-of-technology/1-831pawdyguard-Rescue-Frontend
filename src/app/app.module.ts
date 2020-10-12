import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormComponent } from './volunteer/app-form/app-form.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { DonationsComponent } from './donate/donations/donations.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    DonationsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatToolbarModule, MatInputModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
