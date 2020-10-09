import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalCreateComponent } from './animalsPage/animal-create/animal-create.component';

const routes: Routes = [{ path: 'create', component: AnimalCreateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
