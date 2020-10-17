import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Animal } from './animal.model';

@Injectable({ providedIn: 'root' })
export class AnimalsService {
  private animals: Animal[] = [];
  private animalsUpdated = new Subject<Animal[]>();

  constructor(private http: HttpClient) {}

  getAnimals() {
    this.http
    .get<{ message: string, animals: any }>(
      'http://localhost:3000/animalsPage'
      )
    .pipe(map((animalData) => {
      return animalData.animals.map(animal => {
        return {
          title: animal.title,
          content: animal.content,
          id: animal._id
        };
      });
    }))
    .subscribe((transformedAnimals) => {
      this.animals = transformedAnimals;
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
