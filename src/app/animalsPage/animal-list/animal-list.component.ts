import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

import { Animal } from '../animal.model';
import { AnimalsService } from '../animals.service';
import { NgForm } from '@angular/forms';

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
  userIsAuthenticated = false;
  userId: string;
  private animalsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(public animalsService: AnimalsService, private authService: AuthService) {}

  ngOnInit() {
    console.log('In AnimalListComponent: ngOnInit');
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
    this.animalsService.deleteAnimal(animalId).subscribe(
      () => {
        this.animalsService.getAnimals(this.animalsPerPage, this.currentPage);
      },
    );
  }
// ************
onAdoptRequest(form: NgForm){
  console.log('Request for adoption sent');
}
// ******
  ngOnDestroy() {
    this.animalsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
