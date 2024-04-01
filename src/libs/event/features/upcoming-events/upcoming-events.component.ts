import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {OrderFilter} from '@libs/shared/ui/order-filter';
import {SelectComponent, SelectOption} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [SelectComponent, ReactiveFormsModule],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss',
})
export class UpcomingEventsComponent {
  public form = new FormControl<SelectOption<OrderFilter>>({title: 'Ascending', value: 'asc'});

  public options: Array<SelectOption<OrderFilter>> = [
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
