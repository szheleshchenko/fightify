import {Routes} from '@angular/router';
import {PublicPageComponent} from './public.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.routes').then((module) => module.routes),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
      {
        path: 'forum',
        loadChildren: () => import('./forum/forum.routes').then((module) => module.routes),
      },
      {
        path: 'fighters',
        loadChildren: () => import('./fighters/fighters.routes').then((module) => module.routes),
      },
      {
        path: 'events',
        loadChildren: () => import('./events/events.routes').then((module) => module.routes),
      },
      {
        path: 'leaderboard',
        loadChildren: () =>
          import('./leaderboard/leaderboard.routes').then((module) => module.routes),
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.routes').then((module) => module.routes),
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.routes').then((module) => module.routes),
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.routes').then((module) => module.routes),
      },
      {
        path: 'rankings',
        loadChildren: () => import('./rankings/rankings.routes').then((module) => module.routes),
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.routes').then((module) => module.routes),
      },
    ],
  },
];
