import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { VolunteerService } from './volunteer.service';



@Component({
  selector: 'app-volform',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  enteredfname = '';
  enteredlname = '';

// inserted the service as a dependency injection
  constructor(public volunteerService: VolunteerService) { }

  ngOnInit(): void {
  }


  onAddVolunteer(form: NgForm) {
    if (form.invalid) {
      return;
    }
    //console.log(form.value);
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
      form.value.skills
      );
    form.resetForm();
  }

}
