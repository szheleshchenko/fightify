import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-dashboard-user-item',
  standalone: true,
  imports: [],
  templateUrl: 'dashboard-user-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUserItemComponent {}
