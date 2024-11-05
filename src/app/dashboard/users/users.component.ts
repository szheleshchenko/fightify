import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {User} from '@libs/shared/data-access/api/user';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {PageComponent} from '@libs/shared/features/page';
import {Column, DataTableComponent, PaginationComponent} from '@libs/shared/ui/ui-kit';
import {DashboardUsersPageStore} from './users.store';

@Component({
  selector: 'app-dashboard-users',
  standalone: true,
  imports: [PageComponent, DataTableComponent, PaginationComponent],
  providers: [DashboardUsersPageStore],
  templateUrl: 'users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUsersPageComponent {
  protected readonly store = inject(DashboardUsersPageStore);
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
