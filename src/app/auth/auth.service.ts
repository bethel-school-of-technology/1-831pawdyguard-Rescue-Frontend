import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';

import { AuthData } from "./auth-data.model";
//import { environment } from "../../environments/environment";


// const BACKEND_URL = environment.apiUrl + "/user/";  commented out for now

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;

  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

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
    const authData: AuthData = { email: email, password: password };
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
    const authData: AuthData = { email: email, password: password };
    this.http.post<{ token: string, expiresIn: number }>("http://localhost:3000/api/user/login", authData)
      //this.http.post<{token: string, expiresIn: number }>(BACKEND_URL + "login", authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token; //storing token in the service
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate);
          //navigate to homepage after successful login
          this.router.navigate(['/']);
        }
      });
  }
  // if the page is reloaded the user infos get lost from the auth service 
  // it needs to be stored in local storage and 
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() -  now.getTime();
    if (expiresIn > 0 ) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn/1000);
      this.authStatusListener.next(true);
    }
  }

  // delete token and set auth-status to false
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }
  
private setAuthTimer(duration: number){
  // console.log('Setting timer: ' + duration);
  this.tokenTimer = setTimeout(() => {
    this.logout();
  }, duration * 1000);
}

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }
  //End of class AuthService
}
