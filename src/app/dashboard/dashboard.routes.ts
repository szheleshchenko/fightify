import {Routes} from '@angular/router';
import {DashboardPageComponent} from './dashboard.component';
import {dashboardUsersResolver} from './users/users.resolver';

export const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: '/dashboard/users',
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
        resolve: {users: dashboardUsersResolver},
      },
    ],
  },
];
