import {inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '@libs/shared/data-access/api/user';
import {patchState, signalStore, withHooks} from '@ngrx/signals';
import {addEntities, withEntities} from '@ngrx/signals/entities';

export const DashboardUsersPageStore = signalStore(
  withEntities<User>(),
  withHooks((store, activatedRoute = inject(ActivatedRoute)) => ({
    onInit: () => patchState(store, addEntities(activatedRoute.snapshot.data['users']?.data)),
  })),
);
