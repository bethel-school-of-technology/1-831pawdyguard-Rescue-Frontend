import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home = {
    title: '831pawdyguard rescue',
    subtitle: 'Established in 2018',
    content: '',
    image: 'assets/images/pitter.jpg'

};

  constructor() { }

  ngOnInit(): void {
  }

}
