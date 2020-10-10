import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Animal } from './animal.model';

@Injectable({ providedIn: 'root' })
export class AnimalsService {
  private animals: Animal[] = [];
  private animalsUpdated = new Subject<Animal[]>();

  getAnimals() {
    return [...this.animals];
  }

  getAnimalUpdateListener() {
    return this.animalsUpdated.asObservable();
  }

  addAnimal(title: string, content: string) {
    const animal: Animal = { title: title, content: content };
    this.animals.push(animal);
    this.animalsUpdated.next([...this.animals]);
  }
}
