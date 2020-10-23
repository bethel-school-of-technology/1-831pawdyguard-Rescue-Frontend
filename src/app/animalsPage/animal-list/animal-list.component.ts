import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  // ];
  animals: Animal[] = [];
  totalAnimals = 0;
  animalsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];

  private animalsSub: Subscription;

  constructor(public animalsService: AnimalsService) {}

  ngOnInit() {
    this.animalsService.getAnimals(this.animalsPerPage, this.currentPage);
    this.animalsSub = this.animalsService
      .getAnimalUpdateListener()
      .subscribe((animalData: { animals: Animal[]; animalCount: number }) => {
        this.totalAnimals = animalData.animalCount;
        this.animals = animalData.animals;
      });

  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.animalsPerPage = pageData.pageSize;
    this.animalsService.getAnimals(this.animalsPerPage, this.currentPage);
  }

  onDelete(animalId: string) {
    this.animalsService.deleteAnimal(animalId).subscribe(
      () => {
        this.animalsService.getAnimals(this.animalsPerPage, this.currentPage);
      },
    );
  }

  ngOnDestroy() {
    this.animalsSub.unsubscribe();
  }
}
