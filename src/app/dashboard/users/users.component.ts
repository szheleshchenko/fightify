import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '@libs/shared/data-access/api/user';
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
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

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
    {
      name: '',
      field: 'actions',
    },
  ];

  protected store = inject(DashboardUsersPageStore);

  protected pageChanged(page: number) {
    this.router.navigate(['/dashboard', 'users'], {
      queryParams: {page},
    });
  }
}
