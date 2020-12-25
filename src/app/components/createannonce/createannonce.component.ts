import { ListCategory } from './../../models/listCategory';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AnnoncesService } from './../../services/annonces.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-createannonce',
  templateUrl: './createannonce.component.html',
  styleUrls: ['./createannonce.component.css']
})
export class CreateannonceComponent implements OnInit {

  selected=null
  statusCat=false
  cata:NgOption[]=ListCategory


  annonceForm = new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(16)]),
    description: new FormControl(null, [Validators.required,Validators.minLength(5),Validators.maxLength(150)]),
    prix: new FormControl(null, [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    category: new FormControl(null, [Validators.required]),
    ville: new FormControl(null, [Validators.required,Validators.minLength(4),Validators.maxLength(13)]),
  });
  public userFile:any=File
  listCategory:any[]=[]

  constructor(private annonceService:AnnoncesService,private route:Router,private flash:FlashMessagesService) { }

  ngOnInit(): void {

  }


  onSelectFile(event){
    const file=event.target.files[0]
    this.userFile=file
    console.log(file)
  }
 
  ajouter(SubmitForm:FormGroup){
    const formData= new FormData();
    const ut=SubmitForm.value 
    formData.append('annonce', JSON.stringify(ut));
    formData.append('file',this.userFile);
    this.annonceService.postAnnonce(formData).subscribe(res=>{
    })
    this.route.routeReuseStrategy.shouldReuseRoute=function(){ return false}
    this.route.navigateByUrl("/myAnnonce")
    this.flash.show('Congratulation , you are created a new annonce',{cssClass:'alert-success',timeout:3000})
  }

  go(ap){
    if(ap == 'Autre'){
      this.statusCat=true
      this.annonceForm.patchValue({category:""})
    }
  }

}
