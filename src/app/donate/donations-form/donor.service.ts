import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Donor } from './donor.model';
import { environment } from '../../../environments/environment';

const BACKEND_URL = environment.apiURL ;

@Injectable({ providedIn: 'root'})
export class DonorService {
  
  constructor(private http: HttpClient)  {}


 
  saveDonorInfo(fname: string, lname: string, street: string, street2: string, city: string, 
    state: string,zip: string, email: string, phone: string, wantsLetter: string, timestamp: Date) {
    const donorData: Donor = {id: null, fname: fname, lname: lname, street: street, street2: street2, city: city,
    state: state, zip: zip, email: email, phone: phone, wantsLetter: wantsLetter, timestamp:timestamp};

    this.http.post<{ message: string }>(BACKEND_URL + 'newDonor', donorData)
      .subscribe((resData) => {
        //console.log(resData.message);
      })
  }
}

