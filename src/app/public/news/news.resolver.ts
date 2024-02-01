import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {News, NewsService} from '@libs/shared/data-access/api/news';
import {Observable} from 'rxjs';

export const newsResolver: ResolveFn<Observable<PaginationResponse<News> | undefined>> = () => {
  const newsService = inject(NewsService);

  return newsService.search();
};
