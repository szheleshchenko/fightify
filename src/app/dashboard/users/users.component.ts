import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {User} from '@libs/shared/data-access/api/user';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {PageComponent} from '@libs/shared/features/page';
import {Column, DataTableComponent, PaginationComponent} from '@libs/shared/ui/ui-kit';
import {injectQueryParam} from '@libs/shared/utils/inject-query-param';

@Component({
  imports: [PageComponent, DataTableComponent, PaginationComponent],
  templateUrl: 'users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUsersPageComponent {
  public users = input.required<PaginationResponse<User>>();

  public orderBy = injectQueryParam<keyof User | undefined>('order_by');
  public desc = injectQueryParam<boolean>('desc', {transform: (value) => value === 'true'});

  protected readonly appLinks = injectAppLinks();

  public columns: Array<Column<User>> = [
    {
      name: 'Id',
      field: 'id',
      sortable: true,
      query: 'id',
      link: this.appLinks.dashboardUsers,
    },
    {
      name: 'Username',
      field: 'username',
      sortable: true,
      query: 'username',
      link: this.appLinks.dashboardUsers,
    },
    {
      name: '',
      field: 'id',
    },
  ];
}
