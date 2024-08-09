import {isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UpcomingEventsComponent} from '@libs/event/features/upcoming-events';
import {FooterComponent} from '@libs/shared/features/footer';
import {HeaderComponent} from '@libs/shared/features/header';
import {ProgressBarComponent} from '@libs/shared/features/progress-bar';
import {SsrCookieService} from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent,
    UpcomingEventsComponent,
  ],
  templateUrl: 'app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  public cookieService = inject(SsrCookieService);

  public ngOnInit(): void {
    console.log('set cookie');
    console.log(this.cookieService);
    this.cookieService.set('isBrowser', 'true');
  }
}
