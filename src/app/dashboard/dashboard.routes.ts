import {Routes} from '@angular/router';
import {DashboardPageComponent} from './dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: 'news',
        loadChildren: () => import('./news/news.routes').then((module) => module.routes),
      },
    ],
  },
];
