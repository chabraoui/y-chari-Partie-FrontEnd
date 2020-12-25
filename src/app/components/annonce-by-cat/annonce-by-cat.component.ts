import { ListCategory } from './../../models/listCategory';
import { AnnoncesService } from './../../services/annonces.service';
import { Annonce } from './../../models/annonce';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';


@Component({
  selector: 'app-annonce-by-cat',
  templateUrl: './annonce-by-cat.component.html',
  styleUrls: ['./annonce-by-cat.component.css']
})
export class AnnonceByCatComponent implements OnInit {

  page:number=1;
  id;
  image;
  listAnnonce:Annonce[]=[];
  searchAnnonce:any[]=[];
   constructor(private annonceService:AnnoncesService,
    private route:ActivatedRoute, private router:Router) { }
 
   ngOnInit(): void {
     this.id=this.route.snapshot.paramMap.get('category')
      this.getAll()
     this.image=this.annonceService.host
   }


   getAll(){

  this.router.routeReuseStrategy.shouldReuseRoute=function(){ return false}
    this.annonceService.getCat(this.id).subscribe((res:Annonce[])=>{
      this.searchAnnonce=this.listAnnonce=res
    })
   }

   search(query:string){
    this.searchAnnonce = (query) ? this.listAnnonce.filter(user => user.name.toLowerCase().includes(query.toLowerCase()) || user.ville.toLowerCase().includes(query.toLowerCase()) ) : this.listAnnonce;
      }

 
}
