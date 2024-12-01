import {AfterViewInit, Component, contentChildren} from '@angular/core';
import {TabComponent} from './components';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements AfterViewInit {
  public tabs = contentChildren(TabComponent);

  public ngAfterViewInit(): void {
    this.tabs()[0].active.set(true);
  }

  public clicked(label: string): void {
    this.tabs().forEach((tab) => tab.active.set(tab.label() === label));
  }
}
