import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-upcoming-events-controls',
  standalone: true,
  imports: [],
  templateUrl: './upcoming-events-controls.component.html',
  styleUrl: './upcoming-events-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingEventsControlsComponent {
  @Output() backClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
}
