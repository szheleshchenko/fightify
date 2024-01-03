import {Routes} from '@angular/router';
import {AccountAccessPageComponent} from './account-access.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountAccessPageComponent,
    children: [
      {
        path: 'account',
        loadChildren: () => import('./account/account.routes').then((module) => module.routes),
      },
    ],
  },
];
