import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AuthservicesService } from '../services/authservices.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _authService:AuthservicesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._authService.isloading.next(true)
    return next.handle(request)
    .pipe(
      finalize(()=>this._authService.isloading.next(false))
    );

  }
}
