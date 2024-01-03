import {Routes} from '@angular/router';
import {FightersPageComponent} from './fighters.component';

export const routes: Routes = [
  {
    path: '',
    component: FightersPageComponent,
  },
  {
    path: ':slug',
    loadChildren: () => import('./fighter/fighter.routes').then((module) => module.routes),
  },
];
