import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }


  //persister en localstorage
  set(data: any) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.id);
  }

  handle(data) {
    this.set(data);
  }
/*
  getAdmin() {    
    return localStorage.getItem('admin');
  }
*/

  //recuperer token dé localstorage
  getToken() {
    return localStorage.getItem('token');
  }
  //recuperer id dé localstorage
  getId() {
    return localStorage.getItem('id');
  }
  //remove token et id qui sonr dans localstorage pour logOut
  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('admin');
  }

/*
  decodeAdmin(){
    return JSON.parse(this.getAdmin())
  }
*/

  //decode le token puisque il ne peut pas decrypté  / atob=ascy to binary
  decode(payload) {
    return JSON.parse(atob(payload));
  }

  //recuperer le contenu qui est dans le payload pour le decodé
  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

//verifi" si le token est valid
  isValid() {
    const token = this.getToken();
    const id = this.getId();

    if (token) {

      const payload = this.payload(token);
      if (payload) {
        return id == payload.id;
      }
    }
    return false;
  }

  getInfos() {

    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }

    return null
  }

//verifie si le token est valid
  loggedIn() {
    return this.isValid();
  }


}
