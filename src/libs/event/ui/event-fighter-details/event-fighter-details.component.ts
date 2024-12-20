import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-fighter-details',
  imports: [],
  templateUrl: './event-fighter-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFighterDetailsComponent {
  @Input() isWinner?: boolean;
}
