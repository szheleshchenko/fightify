import {inject} from '@angular/core';
import {AppLinks} from '../providers';

export const injectAppLinks = (): typeof appLinks => {
  const appLinks = inject(AppLinks);

  return appLinks;
};
