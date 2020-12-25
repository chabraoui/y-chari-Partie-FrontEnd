import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private token:JwtService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!this.token.loggedIn()) return next.handle(request);
    let requests=request.clone({
      setHeaders:{
        Authorization:`Bearer ${this.token.getToken()}`
      }
    })
    return next.handle(requests);
  }
}
