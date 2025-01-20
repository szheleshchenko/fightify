import {isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './ui/footer';
import {HeaderComponent} from './ui/header';
import {ProgressBarComponent} from './ui/progress-bar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProgressBarComponent],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
}
