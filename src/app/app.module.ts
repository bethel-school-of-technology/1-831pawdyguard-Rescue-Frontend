import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormComponent } from './volunteer/app-form/app-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DonationsComponent } from './donate/donations/donations.component';


@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    DonationsComponent
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
