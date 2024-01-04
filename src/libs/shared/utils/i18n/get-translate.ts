import {inject} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

export function getTranslate(path: string): (key: string) => string {
  const translationService = inject(TranslocoService);

  return (key: string) => translationService.translate(`${path}.${key}`);
}
