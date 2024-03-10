import {Component} from '@angular/core';
import {EventsStatusFilterComponent} from '@libs/event/ui/events-status-filter';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-events-filter',
  standalone: true,
  imports: [EventsStatusFilterComponent, ButtonComponent],
  templateUrl: './events-filter.component.html',
  styleUrl: './events-filter.component.scss',
})
export class EventsFilterComponent {}
