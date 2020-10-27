import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';

import { AuthData } from "./auth-data.model";
import { environment } from "../../environments/environment";

// const BACKEND_URL = environment.apiUrl + "/user/";  commented out for now

@Injectable({ providedIn: "root" })
export class AuthService  {
  private isAuthenticated = false;
  private token: string;

  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor (private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

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
    this.http.post(" http://localhost:3000/api/user/signup", authData)
 // this.http.post(BACKEND_URL + "signup", authData)
    .subscribe(response => {
      this.router.navigate(["/"]);
    }, error => {
      this.authStatusListener.next(false);
    });
  }

// lots of code to add for authorization, so will come back for error handling

login(email: string, password: string) {
  const authData: AuthData = {email: email, password: password};
  this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
//this.http.post<{token: string}>(BACKEND_URL + "login", authData)
  .subscribe(response => {
    const token = response.token;
    this.token = token; //storing token in the service
    this.authStatusListener.next(true);
  })
  }
}
