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
        data: {
          label: 'TEXT_NEWS' satisfies Translation,
        },
        children: [
          {
            path: '',
            loadComponent: () => import('./news/news.component'),
            data: {
              label: null,
            },
          },
          {
            path: `:slug`,
            loadComponent: () => import('./news/view/view.component'),
            data: {
              label: null,
            },
          },
        ],
      },
    ],
  },
];
