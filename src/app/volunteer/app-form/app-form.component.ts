import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { VolunteerService } from './volunteer.service';



@Component({
  selector: 'app-volform',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  hasAnimal: any = '';
  timestamp = new Date();
  model: any = {};


 constructor(public volunteerService: VolunteerService) { }


  ngOnInit(): void {
  }

  radioChangeHandler(event: any) {
      this.hasAnimal = event.target.value;
  };

  onAddVolunteer(form: NgForm) {
    if (form.invalid) {
      return;
    }
    //console.log(form.value.ownsAnimal);
    const volchoice = JSON.stringify(this.model, null);
  
    this.volunteerService.createVolunteer(
      form.value.fname, 
      form.value.lname, 
      form.value.street,
      form.value.street2, 
      form.value.city, 
      form.value.state,
      form.value.zip, 
      form.value.email, 
      form.value.phone,
      form.value.details, 
      form.value.ownsAnimal,
      form.value.skills,
      volchoice,
      this.timestamp
      );
    form.resetForm();
    alert('Thank you, for your time! We will contact you soon!');
  }


}
