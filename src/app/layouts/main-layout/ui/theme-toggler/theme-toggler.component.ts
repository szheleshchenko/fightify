import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ThemeStore} from '@core/theme';
import {ButtonDirective} from '@ui/button';

@Component({
  selector: 'app-theme-toggler',
  imports: [ButtonDirective],
  templateUrl: './theme-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeTogglerComponent {
  public readonly themeStore = inject(ThemeStore);
}
