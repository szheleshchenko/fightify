import {ChangeDetectionStrategy, Component} from '@angular/core';
import {OpponentDetailsComponent} from '@libs/shared/ui/opponent-details';

@Component({
  selector: 'app-upcoming-event',
  imports: [OpponentDetailsComponent],
  templateUrl: './upcoming-event.component.html',
  styleUrl: './upcoming-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingEventComponent {}
