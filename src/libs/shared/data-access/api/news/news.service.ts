import {Injectable, inject} from '@angular/core';
import {ApiService, PaginationResponse} from '@libs/shared/data-access/api-client';
import {UseQuery} from '@ngneat/query';
import {plainToInstance} from 'class-transformer';
import {delay, map} from 'rxjs';
import {News} from './models';

@Injectable({providedIn: 'root'})
export class NewsService {
  private query = inject(UseQuery);
  private httpClient = inject(ApiService);

  public search() {
    return this.httpClient.get<PaginationResponse<News>>('/news/news.json').pipe(
      delay(1000),
      map((response) => ({data: response.data.map((news) => plainToInstance(News, news))})),
    );
  }
}
