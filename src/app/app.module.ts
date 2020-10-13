import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    DonationsComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
