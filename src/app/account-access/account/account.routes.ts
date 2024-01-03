import {Routes} from '@angular/router';
import {AccountPageComponent} from './account.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.routes').then((module) => module.routes),
  },
];
