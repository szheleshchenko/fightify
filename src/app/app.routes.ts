import {Routes} from '@angular/router';
import {Feature} from '@core/enums';
import {MainLayoutComponent} from './layouts/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/public/public.routes'),
      },
      {
        path: '',
        loadChildren: () => import('./features/auth/auth.routes'),
      },
      {
        path: Feature.DASHBOARD,
        loadChildren: () => import('./features/dashboard/dashboard.routes'),
      },
    ],
  },
];
