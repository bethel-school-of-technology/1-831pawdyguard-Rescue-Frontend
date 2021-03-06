import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

import { Animal } from '../animal.model';
import { AnimalsService } from '../animals.service';
import { NgForm } from '@angular/forms';
import { AdoptionService } from '../animal-adopt/adoption.service';



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
  animalsPerPage = 3;
  currentPage = 1;
  pageSizeOptions = [1, 3, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private animalsSub: Subscription;
  private authStatusSub: Subscription;
  timestamp = new Date();

  constructor(public animalsService: AnimalsService, private authService: AuthService, public adoptionService: AdoptionService) {}

  ngOnInit() {
    this.animalsService.getAnimals(this.animalsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    this.animalsSub = this.animalsService
      .getAnimalUpdateListener()
      .subscribe((animalData: { animals: Animal[]; animalCount: number }) => {
        this.totalAnimals = animalData.animalCount;
        this.animals = animalData.animals;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.animalsPerPage = pageData.pageSize;
    this.animalsService.getAnimals(this.animalsPerPage, this.currentPage);
  }

  onDelete(animalId: string) {
    this.animalsService.deleteAnimal(animalId).subscribe(() => {
        this.animalsService.getAnimals(this.animalsPerPage, this.currentPage);
      },
    );
  }
// ************
onAdoptionRequest(form: NgForm) {
  if (form.invalid) {
    return;
  }
  this.adoptionService.requestAdoption(
    form.value.fname, 
    form.value.lname, 
    form.value.email, 
    form.value.phone,
    this.timestamp
    );
  form.resetForm();
}

// ******
  ngOnDestroy() {
    this.animalsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
