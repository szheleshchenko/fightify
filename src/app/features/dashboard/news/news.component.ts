import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {PaginationResponse} from '@core/api-client';
import {Feature} from '@core/enums';
import {News} from '@core/news';
import {injectQueryParam} from '@core/utils/inject-query-param';
import {Column, DataTableComponent} from '@ui/data-table';
import {PaginationComponent} from '@ui/pagination';

@Component({
  selector: 'app-news',
  imports: [PaginationComponent, DataTableComponent],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NewsComponent {
  readonly news = input.required<PaginationResponse<News>>();
  readonly orderBy = injectQueryParam<keyof News | undefined>('order_by');
  readonly desc = injectQueryParam<boolean>('desc', {transform: (value) => value === 'true'});
  readonly features = Feature;

  public columns: Array<Column<News>> = [
    {
      name: 'Id',
      field: 'id',
      sortable: true,
      query: 'id',
      link: this.features.NEWS,
    },
    {
      name: 'Author',
      field: 'author',
      sortable: true,
      query: 'username',
      link: this.features.NEWS,
    },
    {
      name: '',
      field: 'id',
    },
  ];
}
