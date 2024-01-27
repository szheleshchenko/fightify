import {Injectable, inject} from '@angular/core';
import {ApiService, PaginationResponse} from '@libs/shared/data-access/api-client';
import {UseQuery} from '@ngneat/query';
import {plainToInstance} from 'class-transformer';
import {map} from 'rxjs';
import {News} from './models';

@Injectable({providedIn: 'root'})
export class NewsService {
  private query = inject(UseQuery);
  private httpClient = inject(ApiService);

  public search() {
    return this.query<PaginationResponse<News>>({
      queryKey: ['news'] as const,
      queryFn: () =>
        this.httpClient
          .get<PaginationResponse<News>>('/news/news.json')
          .pipe(
            map((response) => ({data: response.data.map((news) => plainToInstance(News, news))})),
          ),
      retry: false,
    });
  }
}
