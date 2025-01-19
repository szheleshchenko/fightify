import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {User, UserService} from '@libs/shared/data-access/api/user';

export const dashboardUsersResolver: ResolveFn<PaginationResponse<User>> = (route) => {
  const usersService = inject(UserService);
  const page = Number(route.queryParamMap.get('page') ?? 1);
  const orderBy = (route.queryParamMap.get('order_by') as keyof User) ?? undefined;
  const desc = route.queryParamMap.get('desc')
    ? route.queryParamMap.get('desc') === 'true'
    : undefined;

  return usersService.search({page, orderBy, desc, perPage: 10});
};
