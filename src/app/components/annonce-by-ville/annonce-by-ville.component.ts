import { ListCategory } from './../../models/listCategory';
import { Annonce } from './../../models/annonce';
import { AnnoncesService } from './../../services/annonces.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-annonce-by-ville',
  templateUrl: './annonce-by-ville.component.html',
  styleUrls: ['./annonce-by-ville.component.css']
})
export class AnnonceByVilleComponent implements OnInit {
  page:number=1
  city;
  id;
  image;
  listAnnonce:Annonce[]=[];
  searchAnnonce:any[]=[];
   constructor(private annonceService:AnnoncesService,
    private route:ActivatedRoute, private router:Router) { }
 
   ngOnInit(): void {
    this.annonceService.getVilles().subscribe((res:[])=>{
      this.city=res
     })
     this.id=this.route.snapshot.paramMap.get('ville')
      this.getAll()
     this.image=this.annonceService.host
   }


   getAll(){
  this.router.routeReuseStrategy.shouldReuseRoute=function(){ return false}
    this.annonceService.getCity(this.id).subscribe((res:Annonce[])=>{
      this.searchAnnonce=this.listAnnonce=res
    })
   }

   search(query:string){
    this.searchAnnonce = (query) ? this.listAnnonce.filter(user => user.name.toLowerCase().includes(query.toLowerCase()) || user.category.toLowerCase().includes(query.toLowerCase()) ) : this.listAnnonce;
      }

}
