import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from "./auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
  const authToken = this.authService.getToken();
  // creates a clone of our http request and adds a new header or overrides it + our jwt token
  const authRequest = req.clone({
    headers: req.headers.set("Authorization", "Bearer " + authToken)
  });
  return next.handle(authRequest);
  }
}
