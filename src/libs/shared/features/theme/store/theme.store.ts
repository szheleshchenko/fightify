import {DOCUMENT} from '@angular/common';
import {computed, inject} from '@angular/core';
import {CookieStorageService} from '@libs/shared/data-access/cookie-storage';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {Theme} from '../types';

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: 'light',
};

export const supportedThemes: Array<Theme> = ['light', 'dark'];

export const ThemeStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods(
    (store, cookieStorageService = inject(CookieStorageService), document = inject(DOCUMENT)) => ({
      setTheme: (theme: Theme) => {
        patchState(store, {theme});

        const themeToRemove = theme === 'light' ? 'dark' : 'light';
        const classList = document.documentElement.classList;

        classList.remove(themeToRemove);
        classList.add(theme);
        cookieStorageService.set('theme', theme);
      },
      toggleTheme: function () {
        this.setTheme(store.theme() === 'light' ? 'dark' : 'light');
      },
    }),
  ),
  withComputed(({theme}) => ({
    isLightThemeOn: computed(() => theme() === 'dark'),
  })),
  withHooks((store, cookieStorageService = inject(CookieStorageService)) => ({
    onInit: () => {
      const storedTheme = cookieStorageService.get('theme') as Theme;

      if (supportedThemes.includes(storedTheme)) {
        store.setTheme(storedTheme);
      }
    },
  })),
);
