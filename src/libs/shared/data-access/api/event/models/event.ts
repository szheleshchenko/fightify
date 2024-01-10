import {EventStatus} from '../types';

export class Event {
  status!: EventStatus;

  constructor(event: Partial<Event> = {}) {
    Object.assign(this, event);
  }
}
