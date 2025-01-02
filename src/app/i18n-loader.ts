import {HttpClient} from '@angular/common/http';
import {inject, Injectable, PendingTasks} from '@angular/core';
import {Translation, TranslocoLoader} from '@jsverse/transloco';
import {forkJoin, map, tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class I18nLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private pendingTasks = inject(PendingTasks);

  public getTranslation(lang: string) {
    const cleanupPendingTask = this.pendingTasks.add();

    const translations = [
      `libs/dashboard/assets/i18n/${lang}.json`,
      `libs/user/assets/i18n/${lang}.json`,
      `libs/shared/assets/i18n/${lang}.json`,
    ];

    return forkJoin(translations.map((path) => this.http.get<Translation>(path))).pipe(
      map((translations) => {
        const translationsMap = translations.reduce((acc, value) => ({...acc, ...value}), {});

        return translationsMap;
      }),
      tap(() => cleanupPendingTask()),
    );
  }
}
