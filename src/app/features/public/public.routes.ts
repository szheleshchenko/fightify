import {Routes} from '@angular/router';
import {Feature} from '@core/enums';
import {Translation} from '@core/types/translation';

export default <Routes>[
  {
    path: '',
    data: {
      label: 'TEXT_HOME' satisfies Translation,
    },
    children: [
      {
        path: Feature.HOME,
        loadComponent: () => import('./home/home.component'),
      },
      {
        path: Feature.NEWS,
        loadComponent: () => import('./news/news.component'),
        data: {
          title: 'TEXT_NEWS' satisfies Translation,
          label: 'TEXT_NEWS' satisfies Translation,
        },
      },
    ],
  },
];
