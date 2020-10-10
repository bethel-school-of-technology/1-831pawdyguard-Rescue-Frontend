import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css'],
})
export class AnimalCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public animalsService: AnimalsService) {}

  onAddAnimal(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.animalsService.addAnimal(form.value.title, form.value.content);
    form.resetForm();
  }
}
