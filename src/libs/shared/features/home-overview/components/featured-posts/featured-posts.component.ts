import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsItemComponent} from '@libs/news/features/news-item';

@Component({
  selector: 'app-home-overview-featured-posts',
  standalone: true,
  imports: [NewsItemComponent],
  templateUrl: 'featured-posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewFeaturedPostsComponent {}
