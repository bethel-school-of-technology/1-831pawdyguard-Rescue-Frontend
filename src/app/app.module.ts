import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AngularMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnimalsModule } from './animals/animals.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from '../app/navigation/header/header.component';

import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';

import { AppFormComponent } from './volunteer/app-form/app-form.component';
import { VolMainComponent } from './volunteer/vol-main/vol-main.component';
import { DonationsFormComponent } from './donate/donations-form/donations-form.component';
import { DonationsComponent } from './donate/donations/donations.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';

import { LayoutComponent } from './layout/layout.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';   
import { AnimalAdoptionComponent } from './animals/animal-adopt/animal-adopt.component';





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
    ErrorComponent,
    LayoutComponent,
    SidenavListComponent,
    ErrorComponent,
    AnimalAdoptionComponent
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
    FlexLayoutModule,
    MatCarouselModule,
    AuthModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})

export class AppModule {}
