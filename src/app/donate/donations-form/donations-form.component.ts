import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { DonorService } from './donor.service';
import { _MatTabBodyBase } from '@angular/material/tabs';

@Component({
  selector: 'app-donations-form',
  templateUrl: './donations-form.component.html',
  styleUrls: ["./donations-form.component.css"]
})


export class DonationsFormComponent {
 enteredValue = '';
 newDonation = ' NO CONTENT';
 phoneNo: number;
 timestamp = new Date();
 hasStreetAdd = false;

 constructor(public donorService: DonorService){}



  onAddDonor(form:NgForm) {
    if (form.invalid) {
      return;
    }
   
    console.log('Now: ' + this.timestamp);
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
      form.value.wantsLetter,
      this.timestamp
      );
    form.resetForm();
    console.log('after form donations form reset');
    alert('We are working on connecting the app with a Paypal Charity account')
  }

  clearForm(donorForm:NgForm){
    console.log('clear form');
    donorForm.resetForm();
  }

  underConstruction() {
    alert(`  Under Construction - This function will be available soon!

    We have set up a couple of mobile giving options for you 
    like Venmo and Zelle.
    Infos and download links are at the bottom of the page.`);
  }



  // End of class
}


