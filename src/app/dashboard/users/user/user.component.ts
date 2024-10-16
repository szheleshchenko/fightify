import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-dashboard-users-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUsersUserPageComponent {}
