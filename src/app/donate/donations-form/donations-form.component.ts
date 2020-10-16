import { Component } from '@angular/core';

@Component({
  selector: 'app-donations-form',
  templateUrl: './donations-form.component.html',
  styleUrls: ["./donations-form.component.css"]
})
export class DonationsFormComponent {
 enteredValue = '';
 newDonation = ' NO CONTENT';

  onAddDonation() {
            this.newDonation = this.enteredValue;
  }

}
