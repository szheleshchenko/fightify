import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {OrderFilter} from '@libs/shared/ui/order-filter';
import {SelectComponent, SelectOption} from '@libs/shared/ui/ui-kit';
import {UpcomingEventComponent} from './components/upcoming-event';
import {UpcomingEventsControlsComponent} from './components/controls';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [
    SelectComponent,
    ReactiveFormsModule,
    UpcomingEventComponent,
    UpcomingEventsControlsComponent,
    NgStyle,
  ],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss',
})
export class UpcomingEventsComponent {
  public form = new FormControl<SelectOption<OrderFilter>>({title: 'Ascending', value: 'asc'});

  public offset = signal(0);

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

  public slideChanged(direction: 1 | -1): void {
    this.offset.update((offset) => {
      if (direction === 1) {
        return offset >= 0 ? offset : offset + direction * 293;
      }

      return offset + direction * 293;
    });
  }
}
