import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnimalCreateComponent } from './animal-create/animal-create.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AngularMaterialModule } from '../material.module';

@NgModule({
  declarations: [AnimalCreateComponent, AnimalListComponent],
  imports: [
    CommonModule,
    NgModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
  ],
})
export class AnimalsModule {}


