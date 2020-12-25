import { CuurentuserService } from './../services/cuurentuser.service';
import { JwtService } from './../services/jwt.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private token:JwtService,private currentService:CuurentuserService,private route:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
 

      if(!this.token.loggedIn()){
        this.token.remove();
        this.currentService.changeStatus(false);
        this.route.navigateByUrl("/login");
        return false;
  
      }
      return true;

  }
  
}
