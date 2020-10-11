import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationsComponent } from './donate/donations/donations.component';
import { HomeComponent } from './home/home.component';
import { AppFormComponent } from './volunteer/app-form/app-form.component';

const routes: Routes = [
  {path: 'donations', component: DonationsComponent },
  {path: 'home', component: HomeComponent },
  {path: 'app-form', component: AppFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
