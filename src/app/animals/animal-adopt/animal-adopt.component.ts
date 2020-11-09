import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AdoptionService } from './adoption.service';




@Component({
  selector: 'app-adopt',
  templateUrl: './animal-adopt.component.html',
  styleUrls: ['./animal-adopt.component.css']
})
export class AnimalAdoptionComponent  {
  timestamp = new Date();
  

 constructor(public adoptionService: AdoptionService) { }


 
 
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


}
