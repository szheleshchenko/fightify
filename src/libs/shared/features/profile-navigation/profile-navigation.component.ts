import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {AvatarComponent, DropdownComponent, DropdownOption} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-profile-navigation',
  standalone: true,
  imports: [DropdownComponent, AvatarComponent, RouterLink, TranslocoDirective],
  templateUrl: './profile-navigation.component.html',
  styleUrl: './profile-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
