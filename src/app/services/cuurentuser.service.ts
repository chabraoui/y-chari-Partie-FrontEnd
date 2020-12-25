import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuurentuserService {
  private loggedIn=new BehaviorSubject<boolean>(this.tokenService.loggedIn());

//pour le convertir en observoble
authStatus=this.loggedIn.asObservable();

  constructor(private tokenService:JwtService) { }
  
//change l"etat du loggedIn
  changeStatus(value:boolean){
    this.loggedIn.next(value);
  }
}
