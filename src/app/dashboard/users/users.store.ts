import {inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {User} from '@libs/shared/data-access/api/user';
import {patchState, signalStore, withHooks, withState} from '@ngrx/signals';
import {setAllEntities, withEntities} from '@ngrx/signals/entities';

type DashboardUsersPageState = {
  currentPage: number;
  lastPage: number;
  sortField: keyof User | null;
  desc: boolean | null;
};

const initialState: DashboardUsersPageState = {
  currentPage: 1,
  lastPage: 1,
  sortField: null,
  desc: null,
};

export const DashboardUsersPageStore = signalStore(
  withState(initialState),
  withEntities<User>(),
  withHooks((store, activatedRoute = inject(ActivatedRoute)) => ({
    onInit: () => {
      activatedRoute.data.pipe(takeUntilDestroyed()).subscribe((data) => {
        const users = data['users'] as PaginationResponse<User>;

        patchState(store, setAllEntities(users.data), {
          currentPage: users.pagination.currentPage,
          lastPage: users.pagination.lastPage,
          desc: activatedRoute.snapshot.queryParamMap.get('desc') === 'true',
          sortField:
            (activatedRoute.snapshot.queryParamMap.get('order_by') as keyof User) ?? undefined,
        });
      });
    },
  })),
);
