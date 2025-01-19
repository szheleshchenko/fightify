import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {SpinnerComponent} from '../spinner';
import {ButtonDirective, ButtonSize, ButtonVariant} from './button.directive';

@Component({
  selector: 'app-button',
  imports: [SpinnerComponent, ButtonDirective],
  template: `
    <button
      [variant]="variant()"
      [size]="size()"
      [isDisabled]="isLoading() || isDisabled()"
      [class]="class()"
      appButton
    >
      @if (isLoading()) {
        <app-spinner />
      }
      <ng-content />
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export class ButtonComponent {
  public variant = input<ButtonVariant>('default');
  public size = input<ButtonSize>('default');
  public isLoading = input<boolean>(false);
  public isDisabled = input<boolean>(false);
  public class = input<string>();
}
