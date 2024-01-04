import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '@libs/shared/features/footer';
import {HeaderComponent, HeaderLink} from '@libs/shared/features/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: 'app.html',
  styleUrls: ['app.scss'],
})
export class AppComponent {
  public headerLinks: Array<HeaderLink> = [
    {
      translationKey: this.getHeaderLinkTranslationKey('TEXT_HOME'),
      path: '/',
    },
    {
      translationKey: this.getHeaderLinkTranslationKey('TEXT_NEWS'),
      path: '/news',
    },
    {
      translationKey: this.getHeaderLinkTranslationKey('TEXT_EVENTS'),
      path: '/events',
    },
    {
      translationKey: this.getHeaderLinkTranslationKey('TEXT_FIGHTERS'),
      path: '/fighters',
    },
    {
      translationKey: this.getHeaderLinkTranslationKey('TEXT_LEADERBOARD'),
      path: '/leaderboard',
    },
    {
      translationKey: this.getHeaderLinkTranslationKey('TEXT_FORUM'),
      path: '/forum',
    },
  ];

  private getHeaderLinkTranslationKey(key: string): string {
    return `SHARED.NAVIGATION.${key}`;
  }
}
