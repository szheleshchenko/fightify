import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {NewsCardComponent} from '@libs/news/features/news-card';
import {NewsService} from '@libs/shared/data-access/api/news/news.service';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit/content-card';

@Component({
  selector: 'app-news-overview',
  standalone: true,
  imports: [ContentCardComponent, AsyncPipe, NewsCardComponent],
  templateUrl: './news-overview.component.html',
  styleUrl: './news-overview.component.scss',
})
export class NewsOverviewComponent {
  news$ = inject(NewsService).search().result$;
}
