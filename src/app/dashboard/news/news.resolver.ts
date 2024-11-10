import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {News, NewsService} from '@libs/shared/data-access/api/news';

export const dashboardNewsResolver: ResolveFn<PaginationResponse<News>> = (route) => {
  const newsService = inject(NewsService);
  const page = Number(route.queryParamMap.get('page') ?? 1);
  const orderBy = (route.queryParamMap.get('order_by') as keyof News) ?? undefined;
  const desc = route.queryParamMap.get('desc')
    ? route.queryParamMap.get('desc') === 'true'
    : undefined;

  return newsService.search({page, orderBy, desc, perPage: 10});
};
