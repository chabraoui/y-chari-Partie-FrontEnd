import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private http:HttpClient) { }
  host="https://ychari.herokuapp.com/annonces/annonceImage/"
  urlAll="https://ychari.herokuapp.com/annonces"
  urlMyAnnonce="https://ychari.herokuapp.com/annonces/myAnnonce"
  urlOneAnnonce="https://ychari.herokuapp.com/annonces"

  getAllAnnonces(){
  return this.http.get(this.urlAll)
}

  getMyAnnonce(){
    return this.http.get(this.urlMyAnnonce)
  }

  getOneAnnonce(annonceId:string){
    return this.http.get(this.urlOneAnnonce+'/'+annonceId)
  }

  postAnnonce(formData:FormData):Observable<any>{
    return this.http.post("https://ychari.herokuapp.com/annonces",formData);
  }

  updatePost(annonce){
    return this.http.put("https://ychari.herokuapp.com/annonces/"+annonce.annonceId,annonce)
  }

  deleteAnnonce(id:string){
    return this.http.delete(this.urlOneAnnonce+'/'+id)
  }

  getCategory(){
    return this.http.get("https://ychari.herokuapp.com/annonces/categories");
}

getVilles(){
  return this.http.get("https://ychari.herokuapp.com/annonces/ville");
}

getCat(cat:string){
  return this.http.get("https://ychari.herokuapp.com/annonces/categories/"+cat)
}
getCity(city:string){
  return this.http.get("https://ychari.herokuapp.com/annonces/villes/"+city)
}

/*
getCatVoit(){
  return this.http.get("http://localhost:1996/annonces/categories/voiture")
}
getCatAccess(){
  return this.http.get("http://localhost:1996/annonces/categories/accessoire")
}
*/
}