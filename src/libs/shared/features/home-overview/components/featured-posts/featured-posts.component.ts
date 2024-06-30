import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PostCardComponent} from '@libs/shared/features/post-card';

@Component({
  selector: 'app-home-overview-featured-posts',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: 'featured-posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewFeaturedPostsComponent {}
