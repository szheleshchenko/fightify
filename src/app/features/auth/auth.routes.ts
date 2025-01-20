import {Routes} from '@angular/router';
import {Feature} from '@core/enums';

export default <Routes>[
  {
    path: '',
    children: [
      {
        path: Feature.LOGIN,
        loadComponent: () => import('./login/login.component'),
      },
      {
        path: Feature.REGISTER,
        loadComponent: () => import('./register/register.component'),
      },
    ],
  },
];
