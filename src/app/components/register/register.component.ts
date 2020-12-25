import { UsersService } from './../../services/users.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=new FormGroup({
    firstName:new FormControl(null, [Validators.required,Validators.minLength(4), Validators.maxLength(12)]),
    lastName:new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(18)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(12)])
  })
  checkEmail:boolean=false;
  constructor(private registerservice:UsersService,
    private route:Router,
    private flash:FlashMessagesService) { }

  ngOnInit(): void {
  }
  save(){
    this.registerservice.save(this.registerForm.value).subscribe(res=>{
      console.log(res)
      if(res){
        this.flash.show('Congratulation, you are sign-up',{cssClass:'alert-success',timeout:3000})
        this.route.navigate(['/login'])
      }

    },(error:any)=>{
      this.checkEmail=true;
    })
  }

}
