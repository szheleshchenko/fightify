import {Routes} from '@angular/router';
import {EventsPageComponent} from './events.component';

export const routes: Routes = [
  {
    path: '',
    component: EventsPageComponent,
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./upcoming/upcoming.routes').then((module) => module.routes),
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.routes').then((module) => module.routes),
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.routes').then((module) => module.routes),
  },
  {
    path: ':slug',
    loadChildren: () => import('./event/event.routes').then((module) => module.routes),
  },
];
