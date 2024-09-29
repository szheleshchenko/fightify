import {isPlatformBrowser} from '@angular/common';
import {computed, inject, PLATFORM_ID} from '@angular/core';
import {LocalStorageService} from '@libs/shared/data-access/local-storage';
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
    (
      store,
      platformId = inject(PLATFORM_ID),
      localStorageService = inject(LocalStorageService),
    ) => ({
      setTheme: (theme: Theme) => {
        patchState(store, {theme});

        if (isPlatformBrowser(platformId)) {
          const themeToRemove = theme === 'light' ? 'dark' : 'light';
          const classList = document.documentElement.classList;

          classList.remove(themeToRemove);
          classList.add(theme);
          localStorageService.setItem('theme', theme);
        }
      },
      toggleTheme: function () {
        this.setTheme(store.theme() === 'light' ? 'dark' : 'light');
      },
    }),
  ),
  withComputed(({theme}) => ({
    isLightThemeOn: computed(() => theme() === 'light'),
  })),
  withHooks((store, localStorageService = inject(LocalStorageService)) => ({
    onInit: () => {
      const storedTheme = localStorageService.getItem('theme') as Theme;

      if (supportedThemes.includes(storedTheme)) {
        store.setTheme(storedTheme);
      }
    },
  })),
);
