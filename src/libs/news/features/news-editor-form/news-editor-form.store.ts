import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {ApiError} from '@libs/shared/data-access/api-client';
import {News, NewsService} from '@libs/shared/data-access/api/news';
import {setError, setFetching, withRequestStatus} from '@libs/shared/data-access/store';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {tapResponse} from '@ngrx/operators';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {filter, pipe, switchMap, tap} from 'rxjs';
import {NewsEditorForm} from './forms';

type NewsEditorFormState = {
  form: NewsEditorForm;
};

const initialState: NewsEditorFormState = {
  form: new NewsEditorForm(),
};

export const DashboardNewsEditorStore = signalStore(
  withState(initialState),
  withRequestStatus(),
  withMethods(
    (
      store,
      newsService = inject(NewsService),
      router = inject(Router),
      links = injectAppLinks(),
    ) => ({
      submitForm: rxMethod<void>(
        pipe(
          tap(() => store.form().markAllAsTouched()),
          filter(() => store.form().valid),
          tap(() => patchState(store, setFetching())),
          switchMap(() =>
            newsService.create(new News({...store.form().value})).pipe(
              tapResponse({
                next: () => {
                  router.navigate([links.dashboardNews]);
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
