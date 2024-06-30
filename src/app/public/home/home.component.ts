import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsCoverPostsSectionComponent} from '@libs/news/features/news-cover-posts-section';
import {HomeOverviewComponent} from '@libs/shared/features/home-overview';
import {PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent, HomeOverviewComponent, NewsCoverPostsSectionComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
