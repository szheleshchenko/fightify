import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthStore} from '@core/auth';
import {Feature} from '@core/enums';
import {TranslocoDirective} from '@jsverse/transloco';
import {AvatarComponent} from '@ui/avatar';
import {ButtonDirective} from '@ui/button';
import {DropdownMenuTriggerDirective} from '@ui/dropdown-menu';
import {
  MenuComponent,
  MenuGroupComponent,
  MenuItemDirective,
  MenuSeparatorComponent,
} from '@ui/menu';

@Component({
  selector: 'app-profile-menu',
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
export class ProfileMenuComponent {
  readonly authStore = inject(AuthStore);
  readonly features = Feature;
}
