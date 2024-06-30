import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [PageComponent, TranslocoDirective],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaderboardPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_LEADERBOARD',
      path: '/leaderboard',
    },
  ];
}
