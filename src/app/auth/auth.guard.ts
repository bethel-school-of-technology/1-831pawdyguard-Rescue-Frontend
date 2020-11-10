import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getIsAuth();
    if (!isAuth) {
      console.log('in authguard: canActivate => User is not logged in');
      this.router.navigate(['/login']); //not authorized - routed to login pg
    }
    console.log('in authguard: canActivate => User is logged in');
    return isAuth;
  }
}
