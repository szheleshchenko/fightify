import {isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UpcomingEventsComponent} from '@libs/event/features/upcoming-events';
import {FooterComponent} from '@libs/shared/features/footer';
import {ProgressBarComponent} from '@libs/shared/features/progress-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, ProgressBarComponent, UpcomingEventsComponent],
  templateUrl: 'app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
}
