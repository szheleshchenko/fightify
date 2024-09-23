import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthStore} from '../store';

export function jwtInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const accessToken = inject(AuthStore).accessToken;

  if (!req.url.includes('auth') && accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return next(req);
}
