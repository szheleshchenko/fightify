import {isPlatformBrowser} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  Router,
} from '@angular/router';
import {NgProgressComponent} from 'ngx-progressbar';
import {filter, map, switchMap, take} from 'rxjs';

const PROGRESS_BAR_DELAY = 30;

@Component({
  selector: 'app-progress-bar',
  imports: [NgProgressComponent],
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {
  @ViewChild(NgProgressComponent, {static: true}) progressBar!: NgProgressComponent;

  private readonly router = inject(Router);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  public ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationStart),
        map(() =>
          setTimeout(() => {
            this.progressBar.start();
          }, PROGRESS_BAR_DELAY),
        ),
        switchMap((timeoutId) => {
          return this.router.events.pipe(
            filter((e) =>
              [NavigationEnd, NavigationCancel, NavigationSkipped, NavigationError].some(
                (event) => e instanceof event,
              ),
            ),
            take(1),
            map(() => timeoutId),
          );
        }),
      )
      .subscribe((timeoutId) => {
        clearTimeout(timeoutId);
        this.progressBar.complete();
      });
  }
}
