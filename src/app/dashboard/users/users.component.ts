import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DashboardUserItemComponent} from '@libs/dashboard/features/dashboard-user-item';
import {User} from '@libs/shared/data-access/api/user';
import {PageComponent} from '@libs/shared/features/page';
import {Column, DataTableComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-dashboard-users',
  standalone: true,
  imports: [PageComponent, DashboardUserItemComponent, DataTableComponent],
  templateUrl: 'users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUsersPageComponent {
  public columns: Array<Column<User>> = [
    {
      name: 'Id',
      field: 'id',
      sortable: true,
    },
    {
      name: 'Username',
      field: 'username',
      sortable: true,
    },
  ];

  public data: Array<User> = [
    {
      id: 1,
      username: 'admin',
    },
    {
      id: 2,
      username: 'szheleshchenko',
    },
  ];
}
