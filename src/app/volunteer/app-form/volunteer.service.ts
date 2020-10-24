import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { Subject } from 'rxjs';


import { Volunteer } from './volunteer.model';

// register service on the root level and use only one instance of it
@Injectable({ providedIn: 'root'})
export class VolunteerService {
  
  constructor(private http: HttpClient)  {}


  // stretch goal: add checkboxes for volunteer jobs
  createVolunteer(fname: string, lname: string, street: string, street2: string, city: string, 
    state: string,zip: string, email: string, phone: string, details: string, ownsAnimal: string, skills: string) {
    const volData: Volunteer = {id: null, fname: fname, lname: lname, street: street, street2: street2, city: city,
    state: state, zip: zip, email: email, phone: phone, details: details,ownsAnimal: ownsAnimal, skills: skills };

    this.http.post<{ message: string }>('http://localhost:3000/api/newVol', volData)
      .subscribe((resData) => {
        console.log(resData.message);
      })
  }
}
