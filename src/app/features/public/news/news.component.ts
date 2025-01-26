import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {NewsItemComponent} from '@patterns/news-item';
import {PageHeaderComponent} from '@patterns/page-header/page-header.component';

@Component({
  selector: 'app-news',
  imports: [NewsItemComponent, PageHeaderComponent, TranslocoDirective],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NewsComponent {}
