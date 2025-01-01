import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {News} from '@libs/shared/data-access/api/news';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {PageComponent} from '@libs/shared/features/page';
import {
  ButtonDirective,
  Column,
  DataTableComponent,
  PaginationComponent,
} from '@libs/shared/ui/ui-kit';
import {injectQueryParam} from '@libs/shared/utils/inject-query-param';

@Component({
  selector: 'app-dashboard-news',
  imports: [PageComponent, DataTableComponent, PaginationComponent, RouterLink, ButtonDirective],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNewsPageComponent {
  public news = input.required<PaginationResponse<News>>();
  public orderBy = injectQueryParam<keyof News | undefined>('order_by');
  public desc = injectQueryParam<boolean>('desc', {transform: (value) => value === 'true'});
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
