import {Routes} from '@angular/router';
import {Feature} from '@core/enums';
import {dashboardNewsResolver} from './news/news.resolver';
import {dashboardUsersResolver} from './users/users.resolver';

export default <Routes>[
  {
    path: '',
    redirectTo: '/dashboard/news',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: Feature.NEWS,
        loadComponent: () => import('./news/news.component'),
        resolve: {
          news: dashboardNewsResolver,
        },
        runGuardsAndResolvers: 'always',
      },
      {
        path: Feature.USERS,
        loadComponent: () => import('./users/users.component'),
        resolve: {
          users: dashboardUsersResolver,
        },
        runGuardsAndResolvers: 'always',
      },
    ],
  },
];
