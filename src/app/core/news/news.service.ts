import {inject, Injectable} from '@angular/core';
import {
  ApiService,
  Pagination,
  PaginationRequest,
  PaginationResponse,
  prepareRequestParams,
} from '@libs/shared/data-access/api-client';
import {plainToInstance} from 'class-transformer';
import {map, Observable} from 'rxjs';
import {News} from './models';

@Injectable({providedIn: 'root'})
export class NewsService {
  #apiService = inject(ApiService);

  search(request: PaginationRequest<News>): Observable<PaginationResponse<News>> {
    const params = prepareRequestParams(new PaginationRequest(request));

    return this.#apiService.get<PaginationResponse<News>>('/news', params).pipe(
      map(
        ({data, pagination}) =>
          ({
            data: data.map((news) => plainToInstance(News, news)),
            pagination: plainToInstance(Pagination, pagination),
          }) as PaginationResponse<News>,
      ),
    );
  }

  create(news: News): Observable<News> {
    const params = prepareRequestParams(news);

    return this.#apiService
      .post<News, News>('/news', params)
      .pipe(map((news) => plainToInstance(News, news)));
  }
}
