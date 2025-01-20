import {Routes} from '@angular/router';
import {Feature} from '@core/enums';

export default <Routes>[
  {
    path: '',
    children: [
      {
        path: Feature.HOME,
        loadComponent: () => import('./home/home.component'),
      },
    ],
  },
];
