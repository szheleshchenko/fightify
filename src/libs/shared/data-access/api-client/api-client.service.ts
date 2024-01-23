import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {AppHttpParams} from './types';

@Injectable({providedIn: 'root'})
export class ApiService {
  private httpClient = inject(HttpClient);
  private baseUrl = '/assets/api';

  public get<T>(
    endpoint: string,
    params: AppHttpParams = {},
    options: Parameters<HttpClient['get']>[1] = {},
  ): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}${endpoint}`, {
      params,
      ...options,
    });
  }

  public post<T>(
    endpoint: string,
    data: Partial<T> = {},
    options: Parameters<HttpClient['post']>[2] = {},
  ): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}${endpoint}`, data, options);
  }

  public put<T>(
    endpoint: string,
    data: Partial<T> = {},
    options: Parameters<HttpClient['put']>[2] = {},
  ): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}${endpoint}`, data, options);
  }

  public delete<T>(
    endpoint: string,
    params: AppHttpParams,
    options: Parameters<HttpClient['delete']>[1] = {},
  ): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}${endpoint}`, {
      params,
      ...options,
    });
  }
}
