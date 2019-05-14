import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const updateReqWithHeader = header => {
      return req.clone({
        setHeaders: {
          [header.name]: [header.value],
        },
      });
    };
    
    return next.handle(this.authService.token ? updateReqWithHeader(this.authHeader) : req);
  }
  
  get authHeader() {
    return {
      name: 'Authorization',
      value: `Bearer ${this.authService.token}`,
    };
  }
}
