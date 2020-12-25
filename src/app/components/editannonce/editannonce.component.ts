import { FlashMessagesService } from 'angular2-flash-messages';
import { AnnoncesService } from './../../services/annonces.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editannonce',
  templateUrl: './editannonce.component.html',
  styleUrls: ['./editannonce.component.css']
})
export class EditannonceComponent implements OnInit {
  annonceForm = new FormGroup({
    annonceId:new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    prix: new FormControl(null, [Validators.required])
  });
  id;
  OneAnnonce;
  constructor(private annonceService:AnnoncesService,
    private route:ActivatedRoute,private router:Router,
    private flash:FlashMessagesService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('annonceId');
    this.annonceService.getOneAnnonce(this.id).subscribe(res=>{
      this.OneAnnonce=res
      this.annonceForm.patchValue({
        annonceId:this.id
      })
    });
    
  }
  
  update(annonceForm){
    this.annonceService.updatePost(this.annonceForm.value).subscribe(res=>{
      console.log(res)
    })
    this.router.navigateByUrl("/myAnnonce")
    this.router.routeReuseStrategy.shouldReuseRoute=function(){ return false}
    this.flash.show('Congratulation, your annonce is updated with success',{cssClass:'alert-success',timeout:3000})

  }

  cancel(){
    this.router.navigateByUrl("/myAnnonce")
  }

}
