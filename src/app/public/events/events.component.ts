import {Component} from '@angular/core';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {TranslocoDirective} from '@ngneat/transloco';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [PageComponent, TranslocoDirective],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_EVENTS',
      path: '/login',
    },
  ];
}
