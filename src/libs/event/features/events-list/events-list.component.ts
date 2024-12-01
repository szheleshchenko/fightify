import {ChangeDetectionStrategy, Component} from '@angular/core';
import {EventCardComponent} from '@libs/event/features/event-card';
import {Event} from '@libs/shared/data-access/api/event';

@Component({
  selector: 'app-events-list',
  imports: [EventCardComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent {
  public events: Array<Event> = [
    {
      status: 'past',
    },
    {
      status: 'past',
    },
    {
      status: 'past',
    },
    {
      status: 'past',
    },
    {
      status: 'past',
    },
    {
      status: 'past',
    },
    {
      status: 'past',
    },
    {
      status: 'past',
    },
  ];
}
