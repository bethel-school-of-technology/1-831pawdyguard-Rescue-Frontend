import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { AnimalsService } from '../animals.service';
import { Animal } from '../animal.model';
import { mediaType } from './media-type.validate';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css'],
})
export class AnimalCreateComponent implements OnInit, OnDestroy {
  enteredTitle = '';
  enteredContent = '';
  animal: Animal;
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private animalId: string;
  private authStatusSub: Subscription;

  constructor(
    public animalsService: AnimalsService,
    public route: ActivatedRoute,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
    .getAuthStatusListener()
    .subscribe((authStatus) => {});
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      content: new FormControl(null, {
        validators: [Validators.required],
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mediaType],
      }),
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('animalId')) {
        this.mode = 'edit';
        this.animalId = paramMap.get('animalId');
        this.animalsService.getAnimal(this.animalId).subscribe(animalData => {
          this.animal = {
            id: animalData._id,
            title: animalData.title,
            content: animalData.content,
            imagePath: animalData.imagePath
            //, creator: animalData.creator

          };
          this.form.setValue({
            title: this.animal.title,
            content: this.animal.content,
            image: this.animal.imagePath,
          });
        });
      } else {
        this.mode = 'create';
        this.animalId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSaveAnimal() {
    if (this.form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.animalsService.addAnimal(this.form.value.title, this.form.value.content, this.form.value.image);
    } else {
      this.animalsService.updateAnimal(this.animalId, this.form.value.title, this.form.value.content, this.form.value.image);
    }
    this.form.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
