import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';
import {ForgotPasswordForm} from './forms';
import {TextFieldComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [LoginFormWrapperComponent, ReactiveFormsModule, TextFieldComponent],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss',
})
export class ForgotPasswordFormComponent {
  public form = new ForgotPasswordForm();

  public submitted(): void {
    return;
  }
}
