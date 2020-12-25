import { ListCategory } from './../../models/listCategory';
import { Annonce } from './../../models/annonce';
import { AnnoncesService } from './../../services/annonces.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-allannonces',
  templateUrl: './allannonces.component.html',
  styleUrls: ['./allannonces.component.css']
})
export class AllannoncesComponent implements OnInit {
  page:number=1;
  image;
 listAnnonce:Annonce[]=[];
 searchAnnonce:any[]=[];
  constructor(private annonceService:AnnoncesService, private router:Router) { }

  ngOnInit(): void {
    this.getAllAnnonce()
    this.image=this.annonceService.host
  }

  getAllAnnonce(){
    this.annonceService.getAllAnnonces().subscribe((res:Annonce[])=>{
      this.searchAnnonce=this.listAnnonce=res
    })
  }
  search(query:string){
    this.searchAnnonce = (query) ? this.listAnnonce.filter(user => user.name.toLowerCase().includes(query.toLowerCase()) || user.category.toLowerCase().includes(query.toLowerCase() )|| user.ville.toLowerCase().includes(query.toLowerCase()) ) : this.listAnnonce;
      }
  

}
