import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Animal } from './animal.model';

@Injectable({ providedIn: 'root' })
export class AnimalsService {
  private animals: Animal[] = [];
  private animalsUpdated = new Subject<Animal[]>();

  constructor(private http: HttpClient) {}

  getAnimals() {
    this.http.get<{ message: string, animals: Animal[] }>('http://localhost:3000/animalsPage')
    .subscribe((animalData) => {
      this.animals = animalData.animals;
      this. animalsUpdated.next([...this.animals]);
    });
  }

  getAnimalUpdateListener() {
    return this.animalsUpdated.asObservable();
  }

  addAnimal(title: string, content: string) {
    const animal: Animal = { id: null, title: title, content: content };
    this.http.post<{ message: string }>('http://localhost:3000/animalsPage', animal)
    .subscribe(responseData => {
      console.log(responseData.message);
      this.animals.push(animal);
      this.animalsUpdated.next([...this.animals]);
    });
  }
}
