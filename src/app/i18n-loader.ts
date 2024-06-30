import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Translation, TranslocoLoader} from '@jsverse/transloco';
import {forkJoin, map} from 'rxjs';

@Injectable({providedIn: 'root'})
export class I18nLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    const translations = [`libs/shared/assets/i18n/${lang}.json`];

    return forkJoin(translations.map((path) => this.http.get<Translation>(path))).pipe(
      map((translations) => {
        const translationsMap = translations.reduce((acc, value) => ({...acc, ...value}), {});

        return translationsMap;
      }),
    );
  }
}
