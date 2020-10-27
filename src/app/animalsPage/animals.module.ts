import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnimalCreateComponent } from './animal-create/animal-create.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AngularMaterialModule } from '../material.module';

@NgModule({
  declarations: [AnimalCreateComponent, AnimalListComponent],
  imports: [
    CommonModule,
    // NgModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class AnimalsModule {}


