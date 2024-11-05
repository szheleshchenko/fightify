import {inject, Injectable} from '@angular/core';
import {plainToInstance} from 'class-transformer';
import {map, Observable} from 'rxjs';
import {
  ApiService,
  Pagination,
  PaginationRequest,
  PaginationResponse,
  prepareRequestParams,
} from '../../api-client';
import {User} from './models';

@Injectable({providedIn: 'root'})
export class UserService {
  private apiService = inject(ApiService);

  public search(request: PaginationRequest<User>): Observable<PaginationResponse<User>> {
    const params = prepareRequestParams(new PaginationRequest(request));

    return this.apiService.get<PaginationResponse<User>>('/users', params).pipe(
      map(
        ({data, pagination}) =>
          ({
            data: data.map((user) => plainToInstance(User, user)),
            pagination: plainToInstance(Pagination, pagination),
          }) as PaginationResponse<User>,
      ),
    );
  }
}
