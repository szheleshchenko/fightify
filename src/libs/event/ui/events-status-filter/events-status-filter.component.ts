import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {EventStatus} from '@libs/shared/data-access/api/event';
import {SelectComponent, SelectOption} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-events-status-filter',
  standalone: true,
  imports: [SelectComponent, ReactiveFormsModule],
  templateUrl: './events-status-filter.component.html',
  styleUrl: './events-status-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsStatusFilterComponent {
  public form = new FormControl<SelectOption<EventStatus>>({title: 'All', value: 'all'});

  public options: Array<SelectOption<EventStatus>> = [
    {
      title: 'All',
      value: 'all',
    },
    {
      title: 'Upcoming',
      value: 'upcoming',
    },
    {
      title: 'Live',
      value: 'live',
    },
    {
      title: 'Past',
      value: 'past',
    },
  ];
}
