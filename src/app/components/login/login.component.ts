import { CuurentuserService } from './../../services/cuurentuser.service';
import {  FlashMessagesService } from 'angular2-flash-messages';
import { JwtService } from './../../services/jwt.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:boolean=false
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
  });
  constructor(private authService:AuthService,
              private token:JwtService,
              private route:Router,
              private flash:FlashMessagesService,
              private Cuurentuser:CuurentuserService) { }

  ngOnInit(): void {
  }
  login(){
this.authService.login(this.loginForm.value).subscribe(res=>{
  this.saveTokenToLocalStorage(res)
},(error:any)=>{
  this.mode=true
  this.loginForm.reset()
  })
  }

  saveTokenToLocalStorage(res){
    this.token.handle(res)
    this.Cuurentuser.changeStatus(true)
    this.route.navigateByUrl("/myAnnonce")
    this.flash.show('Welcome, you are sign-in',{cssClass:'alert-success',timeout:3000})
  }


}
