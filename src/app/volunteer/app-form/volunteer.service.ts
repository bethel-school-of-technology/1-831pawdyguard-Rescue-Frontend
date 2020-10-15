import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { Subject } from 'rxjs';


import { Volunteer } from './volunteer.model';


@Injectable({ providedIn: 'root'})
export class VolunteerService {
  
  constructor(private http: HttpClient)  {}

  //reduced volunteer data for test purpose
  // more fields will be added
  createVolunteer(fname: string, lname: string) {
    const volData: Volunteer = {id: null, fname: fname, lname: lname};
    this.http.post<{ message: string }>('http://localhost:3000/api/volunteer', volData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      })
  }
}