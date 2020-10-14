import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';


import { Volunteer } from './volunteer.model';


@Injectable({ providedIn: 'root'})
export class VolunteerService {
  
  private volunteer: Volunteer[] =[];
   private volunteerUpdated = new Subject<Volunteer[]>();

  constructor(private http: HttpClient)  {}

  
  createVolunteer(fname: string, lname: string) {
    const volData: Volunteer = {id: null, fname: fname, lname: lname};
    this.http.post<{ message: string }>('http://localhost:3000/api/volunteer', volData)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.volunteer.push(volData);
        this.volunteerUpdated.next([...this.volunteer]);
      })
  }
}