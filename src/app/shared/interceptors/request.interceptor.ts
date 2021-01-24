import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private sharedService: SharedService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.sharedService.setShowLoaderState(true);
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.sharedService.setShowLoaderState();
          }
        },
        (err: any) => {
          this.sharedService.setShowLoaderState();
        }
      )
    );
  }
}
