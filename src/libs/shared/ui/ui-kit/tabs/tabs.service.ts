import {Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TabsService {
  public activeLabel = signal<string | undefined>(undefined);

  public disableTab(label: string): void {
    this.activeLabel.set(label);
  }
}
