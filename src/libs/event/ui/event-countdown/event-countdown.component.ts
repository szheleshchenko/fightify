import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-event-countdown',
  standalone: true,
  imports: [],
  templateUrl: './event-countdown.component.html',
  styleUrl: './event-countdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCountdownComponent {}
