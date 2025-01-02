import {inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';

export function injectQueryParam<T>(
  key: string,
  {initialValue, transform}: {initialValue?: T; transform?: (value: string | null) => T} = {},
) {
  const activatedRoute = inject(ActivatedRoute);

  return toSignal(
    activatedRoute.queryParamMap.pipe(
      map((params) => {
        const value = params.get(key);

        return ((transform && transform(value)) ?? value ?? initialValue) as T;
      }),
    ),
  );
}
