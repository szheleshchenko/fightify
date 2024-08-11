import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '@libs/shared/data-access/api/auth';

export const unauthorizedGuard: CanActivateFn = (): boolean => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isAuthorized()) {
    return true;
  }

  router.navigate(['/']);

  return false;
};
