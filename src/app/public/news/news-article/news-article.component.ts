import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-news-article-page',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './news-article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsArticlePageComponent {}
