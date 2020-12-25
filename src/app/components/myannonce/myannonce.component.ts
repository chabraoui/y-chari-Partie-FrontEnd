import { ListCategory } from './../../models/listCategory';
import { Annonce } from './../../models/annonce';
import { AnnoncesService } from './../../services/annonces.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-myannonce',
  templateUrl: './myannonce.component.html',
  styleUrls: ['./myannonce.component.css']
})
export class MyannonceComponent implements OnInit {
  page:number=1;
myAnnonce:Annonce[]=[]
image;
searchAnnonce;
  constructor(private annonceService:AnnoncesService,private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute=function(){ return false}
    this.annonceService.getMyAnnonce().subscribe((res:Annonce[])=>{
     this.searchAnnonce= this.myAnnonce=res
      this.image=this.annonceService.host
    })
  }
  search(query:string){
    this.searchAnnonce = (query) ? this.myAnnonce.filter(user => user.name.toLowerCase().includes(query.toLowerCase())) : this.myAnnonce;
      }
      
}
