/* import { CanActivate } from '@angular/router';

export class AuthGuard implements CanActivate {
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        throw new Error("Method not implemented.");
    }

}
 */


import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
//import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth:  AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthentificated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}