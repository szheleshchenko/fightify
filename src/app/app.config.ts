import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router';
import {provideTransloco} from '@jsverse/transloco';
import {errorInterceptor} from '@libs/shared/data-access/api-client';
import {jwtInterceptor} from '@libs/shared/data-access/api/auth';
import {provideAppLinks} from '@libs/shared/features/app-links';
import {provideAngularQuery, QueryClient} from '@tanstack/angular-query-experimental';
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
    provideHttpClient(withFetch(), withInterceptors([jwtInterceptor, errorInterceptor])),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru'],
        defaultLang: 'en',
        prodMode: !isDevMode(),
      },
      loader: I18nLoader,
    }),
    provideAngularQuery(new QueryClient()),
    provideAppLinks({
      root: '/',
      fighters: '/fighters',
      events: '/events',
      forum: '/forum',
      leaderboard: '/leaderboard',
      news: '/news',
      profile: '/profile',
      forgotPassword: '/forgot-password',
      login: '/login',
    }),
  ],
};
