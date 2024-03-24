import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SelectComponent, SelectOption} from '@libs/shared/ui/ui-kit';
import {EventOrderFilter} from './types';

@Component({
  selector: 'app-events-order-filter',
  standalone: true,
  imports: [SelectComponent, ReactiveFormsModule],
  templateUrl: './events-order-filter.component.html',
  styleUrl: './events-order-filter.component.scss',
})
export class EventsOrderFilterComponent {
  public form = new FormControl<SelectOption<EventOrderFilter>>({title: 'Ascending', value: 'asc'});

  public options: Array<SelectOption<EventOrderFilter>> = [
    {
      title: 'Ascending',
      value: 'asc',
    },
    {
      title: 'Descending',
      value: 'desc',
    },
  ];
}
