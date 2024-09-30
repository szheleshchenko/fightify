import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage =
    typeof localStorage !== 'undefined'
      ? localStorage
      : ({
          getItem: () => {},
          setItem: () => {},
          removeItem: () => {},
          clear: () => {},
        } as unknown as Storage);

  public setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  public getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  public clear(): void {
    this.storage.clear();
  }
}
