import {Component} from '@angular/core';
import {EventCountdownComponent} from '@libs/event/ui/event-countdown';
import {EventFighterDetailsComponent} from '@libs/event/ui/event-fighter-details';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [EventFighterDetailsComponent, EventCountdownComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {}
