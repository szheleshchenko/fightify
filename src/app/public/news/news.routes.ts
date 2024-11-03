import {Routes} from '@angular/router';
import {NewsPageComponent} from './news.component';

export const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent,
  },
  {
    path: ':slug',
    loadChildren: () =>
      import('./news-article/news-article.routes').then((module) => module.routes),
  },
];
