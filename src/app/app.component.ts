import {isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, PLATFORM_ID, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UpcomingEventsComponent} from '@libs/event/features/upcoming-events';
import {FooterComponent} from '@libs/shared/features/footer';
import {HeaderComponent, HeaderLink} from '@libs/shared/features/header';
import {ProgressBarComponent} from '@libs/shared/features/progress-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent,
    UpcomingEventsComponent,
  ],
  templateUrl: 'app.html',
  styleUrls: ['app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

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
