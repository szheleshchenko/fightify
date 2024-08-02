import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {EventCardComponent} from '@libs/event/features/event-card';
import {UpcomingEventComponent} from '@libs/event/features/upcoming-event';
import {PostCardComponent} from '@libs/shared/features/post-card';

@Component({
  selector: 'app-home-overview-featured-events',
  standalone: true,
  imports: [EventCardComponent, TranslocoDirective, PostCardComponent, UpcomingEventComponent],
  templateUrl: 'featured-events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewFeaturedEventsComponent {}
