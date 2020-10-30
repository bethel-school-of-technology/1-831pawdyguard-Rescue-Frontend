import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { DonorService } from './donor.service';

@Component({
  selector: 'app-donations-form',
  templateUrl: './donations-form.component.html',
  styleUrls: ["./donations-form.component.css"]
})


export class DonationsFormComponent {
 enteredValue = '';
 newDonation = ' NO CONTENT';

 constructor(public donorService: DonorService){}

 

  onAddDonor(form:NgForm) {
    if (form.invalid) {
      return;
    }
    this.donorService.saveDonorInfo(
      form.value.fname, 
      form.value.lname, 
      form.value.street,
      form.value.street2, 
      form.value.city, 
      form.value.state,
      form.value.zip, 
      form.value.email, 
      form.value.phone,
      form.value.wantsLetter
      );
    form.resetForm();
  }






  // End of class
}


