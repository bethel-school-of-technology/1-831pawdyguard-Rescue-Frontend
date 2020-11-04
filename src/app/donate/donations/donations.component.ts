import { OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})

export class DonationsComponent  {

category = [ 
  { id: 1, desc:'Bottles and food for kittens'},
  { id: 2, desc:'Food for cats and dogs in foster care'},
  { id: 3, desc:'Medical treatment, medication'},
  { id: 4, desc:'Fees for spay and neutering'},
  { id: 5, desc:'Equipment used to safely trap'},
  { id: 6, desc:'Transportation of animals'},
  { id: 7, desc:'Cat litter, litter boxes'},
  { id: 8, desc:'Vaccination'}
];

}


