import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AnimalCreateComponent } from './animalsPage/animal-create/animal-create.component';
import { AnimalListComponent } from './animalsPage/animal-list/animal-list.component';
import { AppFormComponent } from './volunteer/app-form/app-form.component';
import { DonationsFormComponent } from './donate/donations-form/donations-form.component';
// import { MatToolbarModule } from '@angular/material/toolbar'; moved to material.module.ts

import { DonationsComponent } from './donate/donations/donations.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent} from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalCreateComponent,
    AnimalListComponent,
    AppComponent,
    AppFormComponent,
    DonationsComponent,
    HeaderComponent,
    DonationsFormComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
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
