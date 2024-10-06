import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {TranslocoService} from '@jsverse/transloco';
import {ApiError} from '@libs/shared/data-access/api-client';
import {AuthService, AuthStore} from '@libs/shared/data-access/api/auth';
import {setError, setFetching, withRequestStatus} from '@libs/shared/data-access/store';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {ToastService} from '@libs/shared/ui/ui-kit';
import {tapResponse} from '@ngrx/operators';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {filter, pipe, switchMap, tap} from 'rxjs';
import {LoginForm, LoginFormFieldValues} from '../forms';

type LoginFormState = {
  form: LoginForm;
};

const initialState: LoginFormState = {
  form: new LoginForm(),
};

export const LoginFormStore = signalStore(
  withState(initialState),
  withRequestStatus(),
  withMethods(
    (
      store,
      authService = inject(AuthService),
      authStore = inject(AuthStore),
      router = inject(Router),
      links = injectAppLinks(),
      toastService = inject(ToastService),
      translocoService = inject(TranslocoService),
    ) => ({
      submitForm: rxMethod<void>(
        pipe(
          tap(() => store.form().markAllAsTouched()),
          filter(() => store.form().valid),
          tap(() => patchState(store, setFetching())),
          switchMap(() =>
            authService.login(store.form().value as LoginFormFieldValues).pipe(
              tapResponse({
                next: (response) => {
                  store.form().reset();
                  authStore.authorize(response);
                  toastService.show({
                    title: translocoService.translate('USER.LOGIN_FORM.TOASTS.TEXT_TOAST_1'),
                    duration: 10000,
                  });
                  router.navigate([links.root]);
                },
                error: (error) => {
                  patchState(store, setError(error));
                  store.form().enable();

                  if (error instanceof ApiError) {
                    error.errors.forEach((error) => {
                      const control = store.form().get(error.property);

                      control?.setErrors({['server']: error.message});
                      control?.markAsTouched();
                    });
                  }
                },
              }),
            ),
          ),
        ),
      ),
    }),
  ),
);
