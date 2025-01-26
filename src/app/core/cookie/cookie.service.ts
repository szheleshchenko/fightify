import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {inject, Injectable, PLATFORM_ID, REQUEST} from '@angular/core';

// TODO: Refactor functionality
@Injectable({
  providedIn: 'root',
})
export class CookieStorageService {
  readonly #document = inject(DOCUMENT);
  readonly #platformId = inject(PLATFORM_ID);
  readonly #isBrowser = isPlatformBrowser(this.#platformId);
  readonly #request = inject(REQUEST);

  static getCookieRegExp(name: string): RegExp {
    const escapedName: string = name.replace(/([[\]{}()|=;+?,.*^$])/gi, '\\$1');

    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
  }

  static safeDecodeURIComponent(encodedURIComponent: string): string {
    try {
      return decodeURIComponent(encodedURIComponent);
    } catch {
      return encodedURIComponent;
    }
  }

  public check(name: string): boolean {
    name = encodeURIComponent(name);
    const regExp: RegExp = CookieStorageService.getCookieRegExp(name);
    return regExp.test(
      this.#isBrowser ? this.#document.cookie : (this.#request?.headers.get('cookie') ?? ''),
    );
  }

  public get(name: string): string {
    if (this.check(name)) {
      name = encodeURIComponent(name);

      const regExp: RegExp = CookieStorageService.getCookieRegExp(name);
      const result: RegExpExecArray = regExp.exec(
        this.#isBrowser ? this.#document.cookie : (this.#request?.headers.get('cookie') ?? ''),
      ) as RegExpExecArray;

      return result[1] ? CookieStorageService.safeDecodeURIComponent(result[1]) : '';
    } else {
      return '';
    }
  }

  public getAll(): {[key: string]: string} {
    const cookies: {[key: string]: string} = {};
    const cookieString = this.#isBrowser
      ? this.#document?.cookie
      : this.#request?.headers.get('cookie');

    if (cookieString) {
      cookieString.split(';').forEach((currentCookie) => {
        const [cookieName, cookieValue] = currentCookie.split('=');
        cookies[CookieStorageService.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] =
          CookieStorageService.safeDecodeURIComponent(cookieValue);
      });
    }

    return cookies;
  }

  public set(
    name: string,
    value: string,
    externalOptions?: {
      expires?: number | Date;
      path?: string;
      domain?: string;
      secure?: boolean;
      sameSite?: 'Lax' | 'None' | 'Strict';
      partitioned?: boolean;
    },
  ): void {
    if (!this.#isBrowser) {
      return;
    }

    let cookieString: string = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

    const options = externalOptions ? externalOptions : {};

    if (options.expires) {
      if (typeof options.expires === 'number') {
        const dateExpires: Date = new Date(
          new Date().getTime() + options.expires * 1000 * 60 * 60 * 24,
        );

        cookieString += 'expires=' + dateExpires.toUTCString() + ';';
      } else {
        cookieString += 'expires=' + options.expires.toUTCString() + ';';
      }
    }

    if (options.path) {
      cookieString += 'path=' + options.path + ';';
    }

    if (options.domain) {
      cookieString += 'domain=' + options.domain + ';';
    }

    if (options.secure === false && options.sameSite === 'None') {
      options.secure = true;
    }
    if (options.secure) {
      cookieString += 'secure;';
    }

    if (!options.sameSite) {
      options.sameSite = 'Lax';
    }

    cookieString += 'sameSite=' + options.sameSite + ';';

    if (options.partitioned) {
      cookieString += 'Partitioned;';
    }

    this.#document.cookie = cookieString;
  }

  public delete(
    name: string,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite: 'Lax' | 'None' | 'Strict' = 'Lax',
  ): void {
    if (!this.#isBrowser) {
      return;
    }
    const expiresDate = new Date('Thu, 01 Jan 1970 00:00:01 GMT');
    this.set(name, '', {expires: expiresDate, path, domain, secure, sameSite});
  }

  public deleteAll(
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite: 'Lax' | 'None' | 'Strict' = 'Lax',
  ): void {
    if (!this.#isBrowser) {
      return;
    }

    const cookies = this.getAll();

    for (const cookieName in cookies) {
      if (cookieName in cookies) {
        this.delete(cookieName, path, domain, secure, sameSite);
      }
    }
  }
}
