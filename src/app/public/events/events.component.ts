import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {EventsFilterComponent} from '@libs/event/features/events-filter';
import {EventsListComponent} from '@libs/event/features/events-list';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-events',
  imports: [PageComponent, TranslocoDirective, EventsListComponent, EventsFilterComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_EVENTS',
      path: '/login',
    },
  ];
}
