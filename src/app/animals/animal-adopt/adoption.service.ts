import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Adopt } from './adoption.model';
import { environment } from '../../../environments/environment';
const BACKEND_URL = environment.apiURL ;


// register service on the root level and use only one instance of it
@Injectable({ providedIn: 'root'})
export class AdoptionService {

  constructor(private http: HttpClient)  {}


  requestAdoption(fname: string, lname: string, email: string, phone: string, timestamp: Date) {
    const reqAdoption: Adopt = {id: null, fname: fname, lname: lname, 
   email: email, phone: phone, timestamp: timestamp };

    this.http.post<{ message: string }>(BACKEND_URL + 'adopt', reqAdoption)
      .subscribe((resData) => {
        console.log(resData.message);
      })
  }
}