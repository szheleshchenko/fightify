import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HomeOverviewFeaturedPostsComponent} from './components/featured-posts';

@Component({
  selector: 'app-home-overview',
  standalone: true,
  imports: [HomeOverviewFeaturedPostsComponent],
  templateUrl: './home-overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewComponent {}
