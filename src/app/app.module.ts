import { JwtInterceptorInterceptor } from './services/jwt-interceptor.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AllannoncesComponent } from './components/allannonces/allannonces.component';
import { MyannonceComponent } from './components/myannonce/myannonce.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EditannonceComponent } from './components/editannonce/editannonce.component';
import { ShowannonceComponent } from './components/showannonce/showannonce.component';
import { CreateannonceComponent } from './components/createannonce/createannonce.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NvBarComponent } from './components/nv-bar/nv-bar.component';
import { AnnonceByCatComponent } from './components/annonce-by-cat/annonce-by-cat.component';
import { MypipePipe } from './mypipe.pipe';
import { AnnonceByVilleComponent } from './components/annonce-by-ville/annonce-by-ville.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RepeatComponent } from './components/repeat/repeat.component';
import { LightboxModule } from 'ngx-lightbox';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AllannoncesComponent,
    MyannonceComponent,
    LoginComponent,
    PagenotfoundComponent,
    EditannonceComponent,
    ShowannonceComponent,
    CreateannonceComponent,
    NvBarComponent,
    AnnonceByCatComponent,
    MypipePipe,
    AnnonceByVilleComponent,
    RepeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    NgbModule,
    NgxPaginationModule,
    NgSelectModule,
    LightboxModule,
    CrystalLightboxModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent,]
})
export class AppModule { }
