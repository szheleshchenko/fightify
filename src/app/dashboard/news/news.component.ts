import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {News} from '@libs/shared/data-access/api/news';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {PageComponent} from '@libs/shared/features/page';
import {
  ButtonDirective,
  Column,
  DataTableComponent,
  PaginationComponent,
} from '@libs/shared/ui/ui-kit';
import {DashboardNewsPageStore} from './news.store';

@Component({
  selector: 'app-dashboard-news',
  standalone: true,
  imports: [PageComponent, DataTableComponent, PaginationComponent, RouterLink, ButtonDirective],
  providers: [DashboardNewsPageStore],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNewsPageComponent {
  protected readonly store = inject(DashboardNewsPageStore);
  protected readonly appLinks = injectAppLinks();

  public columns: Array<Column<News>> = [
    {
      name: 'Id',
      field: 'id',
      sortable: true,
      query: 'id',
      link: this.appLinks.dashboardUsers,
    },
    {
      name: 'Author',
      field: 'author',
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
