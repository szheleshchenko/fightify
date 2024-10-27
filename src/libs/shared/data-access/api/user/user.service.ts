import {inject, Injectable} from '@angular/core';
import {instanceToPlain} from 'class-transformer';
import {Observable} from 'rxjs';
import {ApiService, PaginationRequest, PaginationResponse} from '../../api-client';
import {User} from './models';

@Injectable({providedIn: 'root'})
export class UserService {
  private apiService = inject(ApiService);

  public search(request: PaginationRequest<User>): Observable<PaginationResponse<User>> {
    const params = instanceToPlain(new PaginationRequest(request));

    return this.apiService.get<PaginationResponse<User>>('/users', params);
  }
}
