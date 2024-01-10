import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-fighter-details',
  standalone: true,
  imports: [],
  templateUrl: './event-fighter-details.component.html',
  styleUrl: './event-fighter-details.component.scss',
})
export class EventFighterDetailsComponent {
  @Input() isWinner?: boolean;
}
