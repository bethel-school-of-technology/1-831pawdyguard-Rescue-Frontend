import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = {

    subtitle: 'Established in 2018',
    content: '',
    image: 'assets/images/pitter.jpg'
};

public executeSelectedChange = (event) => {
  console.log(event);
}

  constructor() { }

  ngOnInit(): void {
  }

}
