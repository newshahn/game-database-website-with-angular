import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'c516ce27587a454da77d60d7987a0747',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },

      setParams: {
        key: 'c516ce27587a454da77d60d7987a0747',
      },
    });

    return next.handle(req);
  }
}
