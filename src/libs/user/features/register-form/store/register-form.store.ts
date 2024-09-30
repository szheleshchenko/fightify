import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {ApiError} from '@libs/shared/data-access/api-client';
import {AuthService, AuthStore} from '@libs/shared/data-access/api/auth';
import {setError, setFetching, withRequestStatus} from '@libs/shared/data-access/store';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {tapResponse} from '@ngrx/operators';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {filter, pipe, switchMap, tap} from 'rxjs';
import {RegisterForm, RegisterFormFieldValues} from '../forms';

type RegisterFormState = {
  form: RegisterForm;
};

const initialState: RegisterFormState = {
  form: new RegisterForm(),
};

export const RegisterFormStore = signalStore(
  withState(initialState),
  withRequestStatus(),
  withMethods(
    (
      store,
      authService = inject(AuthService),
      authStore = inject(AuthStore),
      router = inject(Router),
      links = injectAppLinks(),
    ) => ({
      submitForm: rxMethod<void>(
        pipe(
          tap(() => store.form().markAllAsTouched()),
          filter(() => store.form().valid),
          tap(() => patchState(store, setFetching())),
          switchMap(() => {
            const formValue = store.form().value as RegisterFormFieldValues;

            return authService
              .register({username: formValue.username, password: formValue.password})
              .pipe(
                tapResponse({
                  next: (response) => {
                    authStore.authorize(response);
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
              );
          }),
        ),
      ),
    }),
  ),
);
