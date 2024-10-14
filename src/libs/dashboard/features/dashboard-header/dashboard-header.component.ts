import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {ButtonDirective} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [ButtonDirective, RouterLink],
  templateUrl: './dashboard-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeaderComponent {
  public appLinks = injectAppLinks();
}
