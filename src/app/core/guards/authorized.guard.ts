import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthStore} from '@core/auth';
import {Feature} from '@core/enums';

export const authorizedGuard: CanActivateFn = (): boolean => {
  const router = inject(Router);
  const authStore = inject(AuthStore);

  if (!authStore.isAuthenticated()) {
    return true;
  }

  router.navigate([Feature.HOME]);

  return false;
};
