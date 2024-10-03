import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsItemComponent} from '@libs/news/features/news-item';

@Component({
  selector: 'app-home-overview-most-popular-posts',
  standalone: true,
  imports: [NewsItemComponent],
  templateUrl: './most-popular-posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewMostPopularPostsComponent {}
