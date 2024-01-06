import {Component} from '@angular/core';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {TranslocoDirective} from '@ngneat/transloco';

@Component({
  selector: 'app-fighters',
  standalone: true,
  imports: [PageComponent, TranslocoDirective],
  templateUrl: './fighters.component.html',
  styleUrl: './fighters.component.scss',
})
export class FightersPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_FIGHTERS',
      path: '/fighters',
    },
  ];
}
