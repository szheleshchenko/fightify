import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  inject,
  viewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NavigationStart, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {ButtonDirective, LogoComponent} from '@libs/shared/ui/ui-kit';
import {filter} from 'rxjs';
import {injectAppLinks} from '../app-links';
import {HeaderProfileMenuComponent, HeaderThemeTogglerComponent} from './components';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslocoDirective,
    LogoComponent,
    HeaderProfileMenuComponent,
    HeaderThemeTogglerComponent,
    ButtonDirective,
  ],
  templateUrl: 'header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private mobileMenuToggler = viewChild<ElementRef<HTMLInputElement>>('mobileMenuToggler');
  public appLinks = injectAppLinks();

  public navigationLinks = [
    {
      translationKey: 'TEXT_NEWS',
      path: this.appLinks.news,
    },
    {
      translationKey: 'TEXT_EVENTS',
      path: this.appLinks.events,
    },
    {
      translationKey: 'TEXT_FIGHTERS',
      path: this.appLinks.fighters,
    },
    {
      translationKey: 'TEXT_LEADERBOARD',
      path: this.appLinks.leaderboard,
    },
    {
      translationKey: 'TEXT_FORUM',
      path: this.appLinks.forum,
    },
  ];

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => event instanceof NavigationStart),
      )
      .subscribe(() => {
        const inputElement = this.mobileMenuToggler();

        if (inputElement) {
          inputElement.nativeElement.checked = false;
        }
      });
  }
}
