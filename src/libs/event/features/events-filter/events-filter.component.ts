import {Component} from '@angular/core';
import {EventsContentFilterComponent} from '@libs/event/ui/events-content-filter';
import {EventsStatusFilterComponent} from '@libs/event/ui/events-status-filter';
import {OrderFilterComponent} from '@libs/shared/ui/order-filter';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-events-filter',
  standalone: true,
  imports: [
    EventsStatusFilterComponent,
    EventsContentFilterComponent,
    OrderFilterComponent,
    ButtonComponent,
  ],
  templateUrl: './events-filter.component.html',
  styleUrl: './events-filter.component.scss',
})
export class EventsFilterComponent {}
