import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '@libs/shared/data-access/api/auth';
import {AvatarComponent, DropdownMenuComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-header-profile-menu',
  standalone: true,
  imports: [AvatarComponent, RouterLink, DropdownMenuComponent],
  templateUrl: 'profile-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderProfileMenuComponent {
  public authService = inject(AuthService);
  public isAuthorized = this.authService.isAuthorized;
}
