import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {EventCardComponent} from '@libs/event/features/event-card';
import {UpcomingEventComponent} from '@libs/event/features/upcoming-event';

@Component({
  selector: 'app-home-overview-featured-events',
  imports: [EventCardComponent, TranslocoDirective, UpcomingEventComponent],
  templateUrl: 'featured-events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOverviewFeaturedEventsComponent {}
