import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AnimalsService } from '../animals.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css'],
})
export class AnimalCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  animal: Animal;
  private mode = 'create';
  private animalId: string;

  constructor(public animalsService: AnimalsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('animalId')) {
        this.mode = 'edit';
        this.animalId = paramMap.get('animalId');
        this.animalsService.getAnimal(this.animalId).subscribe(animalData => {
          this.animal = {id: animalData._id, title: animalData.title, content: animalData.content};
        });
      } else {
        this.mode = 'create';
        this.animalId = null;
      }
    });
  }

  onSaveAnimal(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.animalsService.addAnimal(form.value.title, form.value.content);
    } else {
      this.animalsService.updateAnimal(this.animalId, form.value.title, form.value.content);
    }

    form.resetForm();
  }
}
