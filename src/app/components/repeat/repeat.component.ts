import { Router } from '@angular/router';
import { ListCategory } from './../../models/listCategory';
import { NgOption } from '@ng-select/ng-select';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {

  selected=null
  statusCat=false
  cata:NgOption[]=ListCategory

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  searchByCity(search){
    this.router.navigateByUrl("/annonces/villes/"+search)
    }
    go(ap){
      if(ap == 'Autre'){
        this.statusCat=true
      }else{
        this.router.navigateByUrl("/annonces/categories/"+ap)
      }
      
    }
    searchCategory(chercher){
      this.router.navigateByUrl("/annonces/categories/"+chercher)
    }

}
