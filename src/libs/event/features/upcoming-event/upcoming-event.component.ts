import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-upcoming-event',
  standalone: true,
  imports: [],
  templateUrl: 'upcoming-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingEventComponent {}
