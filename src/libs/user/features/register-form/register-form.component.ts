import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent, TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';
import {RegisterForm} from './forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [LoginFormWrapperComponent, ButtonComponent, TextFieldComponent, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  public form = new RegisterForm();

  public submitted(): void {
    return;
  }
}
