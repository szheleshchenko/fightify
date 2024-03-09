import {Component} from '@angular/core';
import {SelectComponent} from '@libs/shared/ui/ui-kit/select';

@Component({
  selector: 'app-events-filter',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './events-filter.component.html',
  styleUrl: './events-filter.component.scss',
})
export class EventsFilterComponent {}
