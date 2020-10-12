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
import { AppFormComponent } from './volunteer/app-form/app-form.component';
import { DonationsComponent } from './donate/donations/donations.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalCreateComponent,
    AnimalListComponent,
    AppFormComponent,
    DonationsComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent

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
