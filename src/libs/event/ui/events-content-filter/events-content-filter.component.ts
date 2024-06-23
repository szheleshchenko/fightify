import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SelectComponent, SelectOption} from '@libs/shared/ui/ui-kit';
import {EventContentFilter} from './types';

@Component({
  selector: 'app-events-content-filter',
  standalone: true,
  imports: [SelectComponent, ReactiveFormsModule],
  templateUrl: './events-content-filter.component.html',
  styleUrl: './events-content-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsContentFilterComponent {
  public form = new FormControl<SelectOption<EventContentFilter>>({
    title: 'Article Date',
    value: 'date',
  });

  public options: Array<SelectOption<EventContentFilter>> = [
    {
      title: 'Article Date',
      value: 'date',
    },
    {
      title: 'Last Comment',
      value: 'last_comment',
    },
    {
      title: 'Views',
      value: 'views',
    },
  ];
}
