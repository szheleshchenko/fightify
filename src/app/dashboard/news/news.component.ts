import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-dashboard-news',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNewsPageComponent {}
