import {ChangeDetectionStrategy, Component} from '@angular/core';
import {EventsContentFilterComponent} from '@libs/event/ui/events-content-filter';
import {EventsStatusFilterComponent} from '@libs/event/ui/events-status-filter';
import {FilterWrapperComponent} from '@libs/shared/ui/filter-wrapper';
import {OrderFilterComponent} from '@libs/shared/ui/order-filter';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-events-filter',
  imports: [
    EventsStatusFilterComponent,
    EventsContentFilterComponent,
    OrderFilterComponent,
    ButtonComponent,
    FilterWrapperComponent,
  ],
  templateUrl: './events-filter.component.html',
  styleUrl: './events-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsFilterComponent {}
