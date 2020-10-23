import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalCreateComponent } from './animalsPage/animal-create/animal-create.component';
import { AnimalListComponent } from './animalsPage/animal-list/animal-list.component';

import { VolMainComponent } from './volunteer/vol-main/vol-main.component';

import { HomeComponent} from './home/home.component'
import { LoginComponent } from './auth/login/login.component';
import { DonationsFormComponent } from './donate/donations-form/donations-form.component';
import { DonationsComponent } from './donate/donations/donations.component';

import { AppFormComponent } from './volunteer/app-form/app-form.component';
import { SignupComponent } from './auth/signup/signup.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'vol-main', component: VolMainComponent },
  { path: 'vol-application', component: AppFormComponent },
  { path: 'create', component: AnimalCreateComponent },
  { path: 'edit/:animalId', component: AnimalCreateComponent },
  { path: 'animal-list', component: AnimalListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'donations-form', component: DonationsFormComponent },
  { path: 'signup', component: SignupComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
