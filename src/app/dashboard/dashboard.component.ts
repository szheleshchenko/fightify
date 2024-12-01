import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardHeaderComponent} from '@libs/dashboard/features/dashboard-header';
import {HeaderComponent} from '@libs/shared/features/header';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, RouterOutlet, DashboardHeaderComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
