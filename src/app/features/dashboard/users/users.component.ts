import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {PaginationResponse} from '@core/api-client';
import {Feature} from '@core/enums';
import {User} from '@core/user';
import {injectQueryParam} from '@core/utils/inject-query-param';
import {Column, DataTableComponent} from '@ui/data-table';
import {PaginationComponent} from '@ui/pagination';

@Component({
  selector: 'app-users',
  imports: [DataTableComponent, PaginationComponent],
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
  readonly users = input.required<PaginationResponse<User>>();
  readonly orderBy = injectQueryParam<keyof User | undefined>('order_by');
  readonly desc = injectQueryParam<boolean>('desc', {transform: (value) => value === 'true'});
  readonly features = Feature;

  readonly columns: Array<Column<User>> = [
    {
      name: 'Id',
      field: 'id',
      sortable: true,
      query: 'id',
      link: this.features.USERS,
    },
    {
      name: 'Username',
      field: 'username',
      sortable: true,
      query: 'username',
      link: this.features.USERS,
    },
    {
      name: '',
      field: 'id',
    },
  ];
}
