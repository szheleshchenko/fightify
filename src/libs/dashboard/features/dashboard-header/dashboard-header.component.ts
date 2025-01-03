import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {ButtonDirective} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-dashboard-header',
  imports: [ButtonDirective, RouterLink, TranslocoDirective],
  templateUrl: './dashboard-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeaderComponent {
  public appLinks = injectAppLinks();
}
