import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppFormComponent } from './volunteer/app-form/app-form.component';

import { AnimalCreateComponent } from './animalsPage/animal-create/animal-create.component';
import { AnimalListComponent } from './animalsPage/animal-list/animal-list.component';

import { DonationsComponent } from './donate/donations/donations.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header1/header1.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalCreateComponent,
    AnimalListComponent,
    AppComponent,
    AppFormComponent,
    DonationsComponent,
    HomeComponent,
    HeaderComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
