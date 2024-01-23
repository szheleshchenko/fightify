import {HttpParams} from '@angular/common/http';

export type AppHttpParams =
  | HttpParams
  | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
