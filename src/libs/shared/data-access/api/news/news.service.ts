import {Injectable, inject} from '@angular/core';
import {ApiService, PaginationResponse} from '@libs/shared/data-access/api-client';
import {plainToInstance} from 'class-transformer';
import {delay, map} from 'rxjs';
import {News} from './models';

@Injectable({providedIn: 'root'})
export class NewsService {
  private httpClient = inject(ApiService);

  public search() {
    return this.httpClient.get<PaginationResponse<News>>('/news/news.json').pipe(
      delay(1000),
      map((response) => ({data: response.data.map((news) => plainToInstance(News, news))})),
    );
  }
}
