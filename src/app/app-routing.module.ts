import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { AnimalCreateComponent } from './animals/animal-create/animal-create.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';

import { VolMainComponent } from './volunteer/vol-main/vol-main.component';

import { HomeComponent} from './home/home.component'
import { LoginComponent } from './auth/login/login.component';
import { DonationsFormComponent } from './donate/donations-form/donations-form.component';
import { DonationsComponent } from './donate/donations/donations.component';

import { AppFormComponent } from './volunteer/app-form/app-form.component';
import { SignupComponent } from './auth/signup/signup.component'
import { AnimalAdoptionComponent } from './animals/animal-adopt/animal-adopt.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'vol-main', component: VolMainComponent },
  { path: 'vol-application', component: AppFormComponent },
  { path: 'animal-create', component: AnimalCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:animalId', component: AnimalCreateComponent, canActivate: [AuthGuard] },
  { path: 'animal-list', component: AnimalListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'donations-form', component: DonationsFormComponent },
  { path: 'adoption-form', component: AnimalAdoptionComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
