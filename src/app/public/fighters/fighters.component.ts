import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {FightersFilterComponent} from '@libs/fighter/features/fighters-filter';
import {FightersListComponent} from '@libs/fighter/features/fighters-list';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-fighters',
  standalone: true,
  imports: [PageComponent, TranslocoDirective, FightersListComponent, FightersFilterComponent],
  templateUrl: './fighters.component.html',
  styleUrl: './fighters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FightersPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_FIGHTERS',
      path: '/fighters',
    },
  ];
}
