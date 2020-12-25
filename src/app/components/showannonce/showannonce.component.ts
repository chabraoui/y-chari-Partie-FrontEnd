import { FlashMessagesService } from 'angular2-flash-messages';
import { JwtService } from './../../services/jwt.service';
import { CuurentuserService } from './../../services/cuurentuser.service';
import { Annonce } from './../../models/annonce';
import { AnnoncesService } from './../../services/annonces.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-showannonce',
  templateUrl: './showannonce.component.html',
  styleUrls: ['./showannonce.component.css']
})
export class ShowannonceComponent implements OnInit {
  closeResult: string;
  isAdmin:string='younes.shabrawy@gmail.com';
  userCurent:{
    sub:"",
    id:"",
    name:"",
    exp:""
  };
  oneAnnonce:Annonce
  annonceId:string
 public  image;
  constructor(private annonceService:AnnoncesService,private modalService: NgbModal,
    private route:ActivatedRoute,private curentService:CuurentuserService,
    private token:JwtService,private router:Router,private flash:FlashMessagesService) {	
     }

  ngOnInit(): void {
    this.annonceId= this.route.snapshot.paramMap.get('annonceId');
    this.image=this.annonceService.host
this.getOneAnnonce(this.annonceId)
this.verifyAuth();
  }
  getOneAnnonce(id:string){
    this.annonceService.getOneAnnonce(id).subscribe((res:Annonce)=>{
      this.oneAnnonce=res
    })
}

verifyAuth(){
  this.curentService.authStatus.subscribe(res=>{
    this.userCurent=this.token.getInfos()
  })
}

delete(annonceId){
  if(confirm('are you sure to delete')){
    this.annonceService.deleteAnnonce(annonceId).subscribe(res =>{
      this.router.navigateByUrl("/myAnnonce")
this.flash.show('Annonce deleted with success', {cssClass:'alert-danger', timeout:3000})
  },(error:any)=>{
    alert("la suppression ne marche pas")
  })
}

}




open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

}