import {Component} from '@angular/core';
import {NewsOverviewComponent} from '@libs/news/features/news-overview';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsOverviewComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsPageComponent {}
