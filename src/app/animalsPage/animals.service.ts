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

  getAnimal(id: string) {
    return this.http.get<{_id: string; title: string; content: string }>("http://localhost:3000/animalsPage/" + id);
  }

  addAnimal(title: string, content: string) {
    const animal: Animal = { id: null, title: title, content: content };
    this.http.post<{ message: string, animalId: string }>('http://localhost:3000/animalsPage', animal)
    .subscribe(responseData => {
      const id = responseData.animalId;
      animal.id = id;
      this.animals.push(animal);
      this.animalsUpdated.next([...this.animals]);
    });
  }

  updateAnimal(id: string, title: string, content: string ) {
    const animal: Animal = { id: id, title: title, content: content };
    this.http.put("http://localhost:3000/animalsPage/" + id, animal)
      .subscribe(response => {
        const updatedAnimals = [...this.animals];
        const oldAnimalIndex = updatedAnimals.findIndex(a => a.id === animal.id);
        updatedAnimals[oldAnimalIndex] = animal;
        this.animals = updatedAnimals;
        this.animalsUpdated.next([...this.animals]);
      });
  }

  deleteAnimal(animalId: string) {
    this.http.delete('http://localhost:3000/animalsPage' + animalId)
    .subscribe(() => {
      const updatedAnimals = this.animals.filter(animal => animal.id !== animalId);
      this.animals = updatedAnimals;
      this.animalsUpdated.next([...this.animals]);
    });
  }
}
