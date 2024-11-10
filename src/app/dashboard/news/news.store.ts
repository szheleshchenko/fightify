import {inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {News} from '@libs/shared/data-access/api/news';
import {patchState, signalStore, withHooks, withState} from '@ngrx/signals';
import {setAllEntities, withEntities} from '@ngrx/signals/entities';

type DashboardNewsPageState = {
  currentPage: number;
  lastPage: number;
  sortField: keyof News | null;
  desc: boolean | null;
};

const initialState: DashboardNewsPageState = {
  currentPage: 1,
  lastPage: 1,
  sortField: null,
  desc: null,
};

export const DashboardNewsPageStore = signalStore(
  withState(initialState),
  withEntities<News>(),
  withHooks((store, activatedRoute = inject(ActivatedRoute)) => ({
    onInit: () => {
      activatedRoute.data.pipe(takeUntilDestroyed()).subscribe((data) => {
        const news = data['news'] as PaginationResponse<News>;

        patchState(store, setAllEntities(news.data), {
          currentPage: news.pagination.currentPage,
          lastPage: news.pagination.lastPage,
          desc: activatedRoute.snapshot.queryParamMap.get('desc') === 'true',
          sortField:
            (activatedRoute.snapshot.queryParamMap.get('order_by') as keyof News) ?? undefined,
        });
      });
    },
  })),
);
