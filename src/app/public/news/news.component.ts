import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {NewsOverviewComponent} from '@libs/news/features/news-overview';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {News} from '@libs/shared/data-access/api/news';
import {PageComponent} from '@libs/shared/features/page';
import {map} from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [PageComponent, NewsOverviewComponent, TranslocoDirective, AsyncPipe],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPageComponent {
  public news$ = inject(ActivatedRoute).data.pipe(
    map((data) => (data as {news: PaginationResponse<News>}).news),
  );
}
