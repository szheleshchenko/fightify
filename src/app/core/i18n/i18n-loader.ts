import {HttpClient} from '@angular/common/http';
import {inject, Injectable, PendingTasks} from '@angular/core';
import {Translation, TranslocoLoader} from '@jsverse/transloco';
import {tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class I18nLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private pendingTasks = inject(PendingTasks);

  public getTranslation(lang: string) {
    const cleanupPendingTask = this.pendingTasks.add();

    return this.http
      .get<Translation>(`app/core/i18n/assets/${lang}.json`)
      .pipe(tap(() => cleanupPendingTask()));
  }
}
