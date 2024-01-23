import {Component, inject} from '@angular/core';
import {NewsService} from '@libs/shared/data-access/api/news/news.service';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit/content-card';

@Component({
  selector: 'app-news-overview',
  standalone: true,
  imports: [ContentCardComponent],
  templateUrl: './news-overview.component.html',
  styleUrl: './news-overview.component.scss',
})
export class NewsOverviewComponent {
  news = inject(NewsService).search();
}
