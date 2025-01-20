import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {plainToInstance} from 'class-transformer';
import {catchError, Observable, throwError} from 'rxjs';
import {ApiError} from '../models';

export function errorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    catchError((error) => {
      if ('error' in error) {
        return throwError(() => plainToInstance(ApiError, error.error));
      }

      return throwError(() => error);
    }),
  );
}
