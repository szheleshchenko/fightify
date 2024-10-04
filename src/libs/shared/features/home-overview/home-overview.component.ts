import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  HomeOverviewFeaturedEventsComponent,
  HomeOverviewFeaturedPostsComponent,
  HomeOverviewMostPopularPostsComponent,
} from './components';

@Component({
  selector: 'app-home-overview',
  standalone: true,
  imports: [
    HomeOverviewFeaturedPostsComponent,
    HomeOverviewFeaturedEventsComponent,
    HomeOverviewMostPopularPostsComponent,
  ],
  templateUrl: './home-overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewComponent {}
