import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

login(data:{email:string, password:string}){
 return this.http.post("https://ychari.herokuapp.com/trainingtostage/login",data)
}
}
