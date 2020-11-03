import { OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})

export class DonationsComponent  {
  donation = {
  title: 'Hi my name is Pitter',
  blog: `I was asked to share a bit of my story. To be honest, 
it is the first time somebody asked me to write about my life.
I feel honored and a bit shy. Let's start with the simple stuff to warm up. 
I live in Salinas with my lovely homy Nia Casad. And it's not to far fetched to say, I own her my life.
I was one of these cats that needed to be rescued. Nias 1st rescued animal ever `
};

obj = [ 
  { id: 1, desc:'Food and bottles for bottle fed kittens'},
  { id: 2, desc:'Food for cats and dogs in foster care'},
  { id: 3, desc:'Medical treatment '},
  { id: 4, desc:'Including: spay and neutering'},
  { id: 5, desc:'Equipment used to safely trap'},
  { id: 6, desc:'Transportation of animals'}
];

}


