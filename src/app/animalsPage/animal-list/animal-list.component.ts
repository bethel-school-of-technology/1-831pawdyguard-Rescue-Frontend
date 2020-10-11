import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Animal } from '../animal.model';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit, OnDestroy {
  // animals = [
  //   { title: 'Grayson', content: '1st Cat. Gorgeous!' },
  //   { title: 'Alita', content: '2nd Cat. Hunter!' },
  //   { title: 'Naala', content: "3re Cat. Jeff's cat - not available!" },
  // ];
  animals: Animal[] = [];
  private animalsSub: Subscription;

  constructor(public animalsService: AnimalsService) {}

  ngOnInit() {
    this.animals = this.animalsService.getAnimals();
    this.animalsSub = this.animalsService
      .getAnimalUpdateListener()
      .subscribe((animals: Animal[]) => {
        this.animals = animals;
      });
  }

  ngOnDestroy() {
    this.animalsSub.unsubscribe();
  }
}
