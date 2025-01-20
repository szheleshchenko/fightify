import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Feature} from '@core/enums';
import {TranslocoDirective} from '@jsverse/transloco';
import {ButtonDirective} from '@ui/button';
import {LogoComponent} from '@ui/logo';
import {ProfileMenuComponent} from '../profile-menu';
import {ThemeTogglerComponent} from '../theme-toggler';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    ProfileMenuComponent,
    ThemeTogglerComponent,
    ButtonDirective,
    TranslocoDirective,
    LogoComponent,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly features = Feature;
}
