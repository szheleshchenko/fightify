import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {EventCountdownComponent} from '@libs/event/ui/event-countdown';
import {EventFighterDetailsComponent} from '@libs/event/ui/event-fighter-details';
import {Event} from '@libs/shared/data-access/api/event';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [RouterLink, EventFighterDetailsComponent, EventCountdownComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() event!: Event;

  public get isUpcoming(): boolean {
    return this.event.status === 'upcoming';
  }

  public get isPast(): boolean {
    return this.event.status === 'past';
  }
}
