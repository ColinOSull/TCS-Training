import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const tokenObj = this.userService.tokenValue;
    const isLoggedIn = tokenObj && tokenObj.token;
    const isApiUrl = request.url.startsWith('http://localhost:5001');
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenObj.token}`
        }
      });
    }
    return next.handle(request);
  }
}