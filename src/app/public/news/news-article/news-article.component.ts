import {Component} from '@angular/core';
import {NewsArticleViewComponent} from '@libs/news/features/news-article-view';
import {PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [PageComponent, NewsArticleViewComponent],
  templateUrl: './news-article.component.html',
  styleUrl: './news-article.component.scss',
})
export class NewsArticlePageComponent {}
