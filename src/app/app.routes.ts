import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.routes').then((module) => module.routes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./account-access/account-access.routes').then((module) => module.routes),
  },
];
