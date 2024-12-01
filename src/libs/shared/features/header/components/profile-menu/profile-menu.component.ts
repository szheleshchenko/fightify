import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {AuthStore} from '@libs/shared/data-access/api/auth';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {
  AvatarComponent,
  ButtonDirective,
  DropdownMenuTriggerDirective,
  MenuComponent,
  MenuGroupComponent,
  MenuItemDirective,
  MenuSeparatorComponent,
} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-header-profile-menu',
  imports: [
    AvatarComponent,
    RouterLink,
    MenuItemDirective,
    MenuComponent,
    MenuSeparatorComponent,
    MenuGroupComponent,
    DropdownMenuTriggerDirective,
    TranslocoDirective,
    ButtonDirective,
  ],
  templateUrl: 'profile-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderProfileMenuComponent {
  public authStore = inject(AuthStore);
  public links = injectAppLinks();
}
