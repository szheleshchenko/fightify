import {provideHttpClient, withFetch} from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router';
import {provideTransloco} from '@jsverse/transloco';
import {provideAppLinks} from '@libs/shared/features/app-links';
import {routes} from './app.routes';
import {I18nLoader} from './i18n-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'top'}),
    ),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru'],
        defaultLang: 'en',
        prodMode: !isDevMode(),
      },
      loader: I18nLoader,
    }),
    provideAppLinks({
      root: '/',
      fighters: '/fighters',
      events: '/events',
      forum: '/forum',
      leaderboard: '/leaderboard',
      news: '/news',
      profile: '/profile',
    }),
  ],
};
