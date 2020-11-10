import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { DonorService } from './donor.service';


@Component({
  selector: 'app-donations-form',
  templateUrl: './donations-form.component.html',
  styleUrls: ["./donations-form.component.css"]
})


export class DonationsFormComponent {
 timestamp = new Date();
 hasStreetAdd = false;


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
      form.value.wantsLetter,
      this.timestamp
      );
    form.resetForm();
  }

  clearForm(donorForm:NgForm){
    donorForm.resetForm();
  }

  underConstruction() {
    alert(`  Under Construction - 
    
    Donating through PayPal will be available soon!

    For now we have set up a couple of mobile giving options for you 
    like Venmo and Zelle.
    Infos and download links are at the bottom of the page.`);
  }

}


