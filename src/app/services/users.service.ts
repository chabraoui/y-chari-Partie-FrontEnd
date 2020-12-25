import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  save(data){
    return this.http.post("https://ychari.herokuapp.com/trainingtostage",data);
  }
}
