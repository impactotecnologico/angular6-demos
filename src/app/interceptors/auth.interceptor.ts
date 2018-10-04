import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from '../feature1-module/services/logger.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private log:LoggerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('Content-Type', 'application/json');
    const authReq = req.clone({ headers });

    this.log.log('Nueva request: ', authReq);

    return next.handle(authReq);
  }
}
