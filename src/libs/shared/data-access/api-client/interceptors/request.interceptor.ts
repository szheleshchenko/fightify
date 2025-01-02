import {HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {inject, PendingTasks} from '@angular/core';
import {Observable, tap} from 'rxjs';

export function requestInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const pendingTasks = inject(PendingTasks);

  const cleanupTask = pendingTasks.add();

  console.log('add task');

  return next(req).pipe(
    tap({
      next: () => {
        cleanupTask();
        console.log('clean task');
      },
      error: () => {
        cleanupTask();
        console.log('clean task');
      },
    }),
  );
}
