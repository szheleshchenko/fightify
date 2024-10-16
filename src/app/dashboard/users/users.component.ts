import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DashboardUserItemComponent} from '@libs/dashboard/features/dashboard-user-item';
import {PageComponent} from '@libs/shared/features/page';

@Component({
  selector: 'app-dashboard-users',
  standalone: true,
  imports: [PageComponent, DashboardUserItemComponent],
  templateUrl: 'users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUsersPageComponent {}
