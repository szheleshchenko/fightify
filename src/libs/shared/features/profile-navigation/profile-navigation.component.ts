import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AvatarComponent} from '@libs/shared/ui/ui-kit/avatar';
import {DropdownComponent} from '@libs/shared/ui/ui-kit/dropdown';
import {DropdownOption, DropdownOptionComponent} from '@libs/shared/ui/ui-kit/dropdown-option';
import {TranslocoDirective} from '@ngneat/transloco';

@Component({
  selector: 'app-profile-navigation',
  standalone: true,
  imports: [
    DropdownComponent,
    DropdownOptionComponent,
    AvatarComponent,
    RouterLink,
    TranslocoDirective,
  ],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
})
export class ProfileNavigationComponent {
  public links: Array<DropdownOption> = [
    {
      translationKey: this.getTranslationKey('TEXT_ACCOUNT_SETTINGS'),
      link: '/account/settings',
    },
    {
      translationKey: this.getTranslationKey('TEXT_BETS_HISTORY'),
      link: '/account/bets-history',
    },
    {
      translationKey: this.getTranslationKey('TEXT_COMMENTS_HISTORY'),
      link: '/account/comments-history',
    },
    {
      translationKey: this.getTranslationKey('TEXT_LOGOUT'),
      link: '/logout',
    },
  ];

  public getTranslationKey(key: string): string {
    return `SHARED.PROFILE_NAVIGATION.${key}`;
  }
}
