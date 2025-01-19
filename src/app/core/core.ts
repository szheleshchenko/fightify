import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {isDevMode, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {
  provideRouter,
  Routes,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import {provideTransloco} from '@jsverse/transloco';
import {provideQueryClient, QueryClient} from '@tanstack/angular-query-experimental';
import {I18nLoader} from './i18n';

export type CoreOptions = {
  routes: Routes;
};

export function provideCore({routes}: CoreOptions) {
  return [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'top'}),
      withComponentInputBinding(),
    ),
    provideQueryClient(new QueryClient()),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([])),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: I18nLoader,
    }),
  ];
}
