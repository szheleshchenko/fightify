import {CdkMenu} from '@angular/cdk/menu';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthStore} from '@libs/shared/data-access/api/auth';
import {AvatarComponent, DropdownMenuComponent} from '@libs/shared/ui/ui-kit';
import {
  MenuGroupComponent,
  MenuItemDirective,
  MenuSeparatorComponent,
} from '@libs/shared/ui/ui-kit/menu';
import {MenuComponent} from '@libs/shared/ui/ui-kit/menu/menu.component';

@Component({
  selector: 'app-header-profile-menu',
  standalone: true,
  imports: [
    AvatarComponent,
    RouterLink,
    DropdownMenuComponent,
    MenuItemDirective,
    MenuComponent,
    MenuSeparatorComponent,
    MenuGroupComponent,
    CdkMenu,
  ],
  templateUrl: 'profile-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderProfileMenuComponent {
  public authStore = inject(AuthStore);
}
