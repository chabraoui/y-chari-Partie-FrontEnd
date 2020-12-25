import { AnnonceByVilleComponent } from './components/annonce-by-ville/annonce-by-ville.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateannonceComponent } from './components/createannonce/createannonce.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MyannonceComponent } from './components/myannonce/myannonce.component';
import { EditannonceComponent } from './components/editannonce/editannonce.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllannoncesComponent } from './components/allannonces/allannonces.component';
import { ShowannonceComponent } from './components/showannonce/showannonce.component';
import { AuthGuard } from './guards/auth.guard';
import { AfterauthGuard } from './guards/afterauth.guard';
import { AnnonceByCatComponent } from './components/annonce-by-cat/annonce-by-cat.component';


const routes: Routes = [
  {path:"",redirectTo:"/annonces",pathMatch:'full'},
  {path:"login", component:LoginComponent,canActivate:[AfterauthGuard]},
  {path:"addAnnonce",component:CreateannonceComponent,canActivate:[AuthGuard]},
  {path:"register",component:RegisterComponent},
  {path:"annonces", children:[
     {  path:"", component:AllannoncesComponent},
     {  path:"categories/:category", component:AnnonceByCatComponent},
     {  path:"villes/:ville", component:AnnonceByVilleComponent},
     { path:"annonce/:annonceId",component:ShowannonceComponent}
  ]},
  {path:"myAnnonce",children:[
    {path:"",component:MyannonceComponent},
    {path:"edit/:annonceId", component:EditannonceComponent}
  ],canActivate:[AuthGuard]},
  {path:"**",component:PagenotfoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
