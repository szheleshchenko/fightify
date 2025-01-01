import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-login-form-wrapper',
  imports: [],
  templateUrl: './login-form-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormWrapperComponent {
  public heading = input.required<string>();
  public subheading = input<string>();
}
