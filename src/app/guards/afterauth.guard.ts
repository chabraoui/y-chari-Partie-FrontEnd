import { JwtService } from './../services/jwt.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfterauthGuard implements CanActivate {

  constructor(private token:JwtService,private route:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
      if(this.token.loggedIn()){
        this.route.navigateByUrl("/");
        return false;
  
      }
      return true;
  }
  
}
