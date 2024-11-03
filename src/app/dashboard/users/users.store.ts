import {inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {User} from '@libs/shared/data-access/api/user';
import {patchState, signalStore, withHooks, withState} from '@ngrx/signals';
import {setAllEntities, withEntities} from '@ngrx/signals/entities';

export const DashboardUsersPageStore = signalStore(
  withState({
    currentPage: 1,
    lastPage: 1,
  }),
  withEntities<User>(),
  withHooks((store, activatedRoute = inject(ActivatedRoute)) => ({
    onInit: () => {
      activatedRoute.data.pipe(takeUntilDestroyed()).subscribe((data) => {
        const users = data['users'] as PaginationResponse<User>;

        patchState(store, setAllEntities(users.data), {
          currentPage: users.pagination.currentPage,
          lastPage: users.pagination.lastPage,
        });
      });
    },
  })),
);
