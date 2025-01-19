import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthStore} from '@libs/shared/data-access/api/auth';
import {injectAppLinks} from '@libs/shared/features/app-links';

export const authorizedGuard: CanActivateFn = (): boolean => {
  const router = inject(Router);
  const authStore = inject(AuthStore);
  const links = injectAppLinks();

  if (!authStore.isAuthenticated()) {
    return true;
  }

  router.navigate([links.root]);

  return false;
};
