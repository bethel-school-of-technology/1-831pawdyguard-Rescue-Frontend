import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "./auth-data.model";
import { DefaultUrlSerializer } from '@angular/router';

import { Subject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class AuthService  {

  private token: string;

  private isAuthenticated = false;
  private userId: string;

  private authStatusListener = new Subject<boolean>();

  constructor (private http: HttpClient) {}


  getToken() {
    return this.token;

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;

  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }


  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post("http://localhost:3000/api/user/signup", authData)
    .subscribe(response => {
    console.log(response);

    });
  }



login(email: string, password: string) {
  const authData: AuthData = {email: email, password: password};
  this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
  .subscribe(response => {
   const token = response.token;
   this.token = token; //storing token in the service
   this.authStatusListener.next(true);
    })
  }

}
