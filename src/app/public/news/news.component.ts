import {Component} from '@angular/core';
import {NewsOverviewComponent} from '@libs/news/features/news-overview';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {TranslocoDirective} from '@ngneat/transloco';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [PageComponent, NewsOverviewComponent, TranslocoDirective],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_NEWS',
      path: '/news',
    },
  ];
}
