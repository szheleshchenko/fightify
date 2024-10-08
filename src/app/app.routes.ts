import {Routes} from '@angular/router';
import {unauthorizedGuard} from './guards';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.routes').then((module) => module.routes),
  },
  {
    path: '',
    canActivate: [unauthorizedGuard],
    loadChildren: () =>
      import('./account-access/account-access.routes').then((module) => module.routes),
  },
  {
    path: 'dashboard',
    canActivate: [unauthorizedGuard],
    loadChildren: () =>
      import('./account-access/account-access.routes').then((module) => module.routes),
  },
];
