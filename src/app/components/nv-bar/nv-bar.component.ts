import { AnnoncesService } from './../../services/annonces.service';
import { JwtService } from './../../services/jwt.service';
import { CuurentuserService } from './../../services/cuurentuser.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nv-bar',
  templateUrl: './nv-bar.component.html',
  styleUrls: ['./nv-bar.component.css']
})
export class NvBarComponent implements OnInit {
  public isCollapsed:boolean=true;
  userCurent:{
    sub:"",
    id:"",
    name:"",
    exp:""
  };

  //cat:string[]
  constructor(private curentService:CuurentuserService,
              private token:JwtService,
              private router:Router,
              private annonceService:AnnoncesService) { }
//    this.annonceService.getCategory().subscribe((res:[])=>{
  //this.cat=res
//})
  ngOnInit(): void {

    this.curentService.authStatus.subscribe(res=>{
      this.userCurent=this.token.getInfos();
    })

  }
  loggedOut(){
    this.token.remove();
    this.router.navigateByUrl('/login');
    this.curentService.changeStatus(false);
  }
  


}
