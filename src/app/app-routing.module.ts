import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalCreateComponent } from './animalsPage/animal-create/animal-create.component';


const routes: Routes = [{ path: 'create', component: AnimalCreateComponent }];

import { DonationsComponent } from './donate/donations/donations.component';

const routes: Routes = [
  {path: 'donations', component: DonationsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
