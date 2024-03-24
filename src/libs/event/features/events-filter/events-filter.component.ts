import {Component} from '@angular/core';
import {EventsContentFilterComponent} from '@libs/event/ui/events-content-filter';
import {EventsOrderFilterComponent} from '@libs/event/ui/events-order-filter';
import {EventsStatusFilterComponent} from '@libs/event/ui/events-status-filter';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-events-filter',
  standalone: true,
  imports: [
    EventsStatusFilterComponent,
    EventsContentFilterComponent,
    EventsOrderFilterComponent,
    ButtonComponent,
  ],
  templateUrl: './events-filter.component.html',
  styleUrl: './events-filter.component.scss',
})
export class EventsFilterComponent {}
