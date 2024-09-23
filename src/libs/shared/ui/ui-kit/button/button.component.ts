import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {SpinnerComponent} from '../spinner';
import {ButtonDirective, ButtonVariant} from './directives';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SpinnerComponent, ButtonDirective],
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public variant = input<ButtonVariant>('default');
  public isLoading = input<boolean>(false);
  public isDisabled = input<boolean>(false);
}
