import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AvatarComponent} from '@libs/shared/ui/ui-kit/avatar';
import {DropdownComponent} from '@libs/shared/ui/ui-kit/dropdown';
import {DropdownOption, DropdownOptionComponent} from '@libs/shared/ui/ui-kit/dropdown-option';

@Component({
  selector: 'app-profile-navigation',
  standalone: true,
  imports: [DropdownComponent, DropdownOptionComponent, AvatarComponent, RouterLink],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
})
export class ProfileNavigationComponent {
  public links: Array<DropdownOption> = [
    {
      title: 'Settings',
    },
    {
      title: 'Bets',
    },
    {
      title: 'Comments history',
    },
    {
      title: 'Logout',
    },
  ];
}
