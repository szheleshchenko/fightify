import {isPlatformBrowser} from '@angular/common';
import {Component, PLATFORM_ID, ViewChild, inject} from '@angular/core';
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
  standalone: true,
  imports: [NgProgressComponent],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @ViewChild(NgProgressComponent, {static: true}) progressBar!: NgProgressComponent;

  private readonly router = inject(Router);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private setupPageNavigationDimming() {
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
            filter((e) => {
              return (
                e instanceof NavigationEnd ||
                e instanceof NavigationCancel ||
                e instanceof NavigationSkipped ||
                e instanceof NavigationError
              );
            }),
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
