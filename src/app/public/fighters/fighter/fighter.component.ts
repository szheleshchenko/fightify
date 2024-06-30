import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {FighterViewComponent} from '@libs/fighter/features/fighter-view';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-fighter',
  standalone: true,
  imports: [PageComponent, TranslocoDirective, FighterViewComponent],
  templateUrl: './fighter.component.html',
  styleUrl: './fighter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FighterPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_FIGHTERS',
      path: '/fighters',
    },
    {
      translationKey: 'David',
      path: '/fighters/david',
    },
  ];
}
