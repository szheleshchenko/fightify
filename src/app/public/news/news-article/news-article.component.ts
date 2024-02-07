import {Component} from '@angular/core';
import {NewsArticleComponent} from '@libs/news/features/news-article';
import {PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-news-article-page',
  standalone: true,
  imports: [PageComponent, NewsArticleComponent],
  templateUrl: './news-article.component.html',
  styleUrl: './news-article.component.scss',
})
export class NewsArticlePageComponent {}
