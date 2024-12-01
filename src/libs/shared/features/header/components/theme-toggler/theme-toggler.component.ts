import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ThemeStore} from '@libs/shared/features/theme';
import {ButtonDirective} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-header-theme-toggler',
  imports: [ButtonDirective],
  templateUrl: './theme-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderThemeTogglerComponent {
  public readonly themeStore = inject(ThemeStore);
}
