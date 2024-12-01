import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsItemComponent} from '@libs/news/features/news-item';

@Component({
  selector: 'app-home-overview-featured-posts',
  imports: [NewsItemComponent],
  templateUrl: 'featured-posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewFeaturedPostsComponent {}
