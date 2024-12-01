import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';
import {ForgotPasswordForm} from './forms';

@Component({
  selector: 'app-forgot-password-form',
  imports: [LoginFormWrapperComponent, ReactiveFormsModule, TextFieldComponent],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordFormComponent {
  public form = new ForgotPasswordForm();

  public submitted(): void {
    return;
  }
}
