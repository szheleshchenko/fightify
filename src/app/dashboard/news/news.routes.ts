import {Routes} from '@angular/router';
import {DashboardNewsPageComponent} from './news.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardNewsPageComponent,
  },
  {
    path: 'editor',
    loadChildren: () => import('./editor/editor.routes').then((module) => module.routes),
  },
];
