import {Routes} from '@angular/router';
import {DashboardPageComponent} from './dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: '/dashboard/news',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
      {
        path: 'news',
        loadChildren: () => import('./news/news.routes').then((module) => module.routes),
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.routes').then((module) => module.routes),
      },
    ],
  },
];
