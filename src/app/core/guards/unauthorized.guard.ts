import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthStore} from '@libs/shared/data-access/api/auth';

export const unauthorizedGuard: CanActivateFn = (): boolean => {
  const router = inject(Router);
  const authService = inject(AuthStore);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/']);

  return false;
};
