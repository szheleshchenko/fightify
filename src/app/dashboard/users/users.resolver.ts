import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {User, UserService} from '@libs/shared/data-access/api/user';

export const dashboardUsersResolver: ResolveFn<PaginationResponse<User>> = () => {
  const usersService = inject(UserService);

  return usersService.search({page: 1, perPage: 10});
};
