import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    slides = [
      {'image': 'assets/images/pups.jpg'},
      {'image': 'assets/images/woman-rescue-dog-shelter.jpg'},
      {'image': 'assets/images/cat-adopt-me-sign.jpg'},
  ];


public executeSelectedChange = (event) => {
  console.log(event);
}

  constructor() { }

  ngOnInit(): void {
  }

}
