import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Donor } from './donor.model';


@Injectable({ providedIn: 'root'})
export class DonorService {
  
  constructor(private http: HttpClient)  {}


 
  saveDonorInfo(fname: string, lname: string, street: string, street2: string, city: string, 
    state: string,zip: string, email: string, phone: string) {
    const donorData: Donor = {id: null, fname: fname, lname: lname, street: street, street2: street2, city: city,
    state: state, zip: zip, email: email, phone: phone };

    this.http.post<{ message: string }>('http://localhost:3000/api/newDonor', donorData)
      .subscribe((resData) => {
        console.log(resData.message);
      })
  }
}

