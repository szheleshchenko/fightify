import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HomeOverviewComponent} from '@libs/shared/features/home-overview';
import {PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-home',
  imports: [PageComponent, HomeOverviewComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
