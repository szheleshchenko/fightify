import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {EventCountdownComponent} from '@libs/event/ui/event-countdown';
import {EventFighterDetailsComponent} from '@libs/event/ui/event-fighter-details';
import {Event} from '@libs/shared/data-access/api/event';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-event-card',
  imports: [RouterLink, EventFighterDetailsComponent, EventCountdownComponent, ButtonComponent],
  templateUrl: './event-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
