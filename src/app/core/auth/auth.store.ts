import {computed, inject} from '@angular/core';
import {CookieStorageService} from '@core/cookie';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {User} from '../user';
import {AuthResponse} from './models';

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

export const AuthStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withComputed(({accessToken}) => ({
    isAuthenticated: computed(() => !!accessToken()),
  })),
  withMethods((store, cookieService = inject(CookieStorageService)) => ({
    authorize: (response: AuthResponse): void => {
      patchState(store, response);
      cookieService.set('access_token', response.accessToken, {
        expires: new Date().setDate(new Date().getDate() + 7),
        secure: true,
      });
      cookieService.set('refresh_token', response.refreshToken, {
        expires: new Date().setDate(new Date().getDate() + 7),
        secure: true,
      });
    },
    unauthorize: (): void => {
      patchState(store, initialState);
      cookieService.delete('access_token');
      cookieService.delete('refresh_token');
    },
  })),
  withHooks((store, cookieService = inject(CookieStorageService)) => ({
    onInit: () => {
      patchState(store, {
        accessToken: cookieService.get('access_token'),
        refreshToken: cookieService.get('refresh_token'),
      });
    },
  })),
);
