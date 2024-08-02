import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HomeOverviewFeaturedEventsComponent} from './components/featured-events';
import {HomeOverviewFeaturedPostsComponent} from './components/featured-posts';

@Component({
  selector: 'app-home-overview',
  standalone: true,
  imports: [HomeOverviewFeaturedPostsComponent, HomeOverviewFeaturedEventsComponent],
  templateUrl: './home-overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewComponent {}
