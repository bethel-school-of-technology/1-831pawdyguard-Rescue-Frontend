import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home = {
    title: '831 Pawdyguard Rescue',
    subtitle: 'Established in 2019',
    content: 'information, information',
    image: 'assets/images/pitter.jpg'
};
  constructor() { }

  ngOnInit(): void {
  }

}
