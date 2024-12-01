import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-login-form-wrapper',
  imports: [ButtonComponent],
  templateUrl: './login-form-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormWrapperComponent {
  public heading = input.required<string>();
  public subheading = input<string>();
}
