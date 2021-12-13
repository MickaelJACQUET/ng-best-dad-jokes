import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvalServiceService } from '../eval-service.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(public auth: EvalServiceService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
      }
    });
    return next.handle(request);
  }
}