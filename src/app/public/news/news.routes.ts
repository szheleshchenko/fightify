import {Routes} from '@angular/router';
import {NewsPageComponent} from './news.component';
import {newsResolver} from './news.resolver';

export const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent,
    resolve: {news: newsResolver},
  },
  {
    path: ':slug',
    loadChildren: () =>
      import('./news-article/news-article.routes').then((module) => module.routes),
  },
];
