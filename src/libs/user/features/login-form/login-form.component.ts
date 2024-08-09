import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {AuthService, LoginRequest} from '@libs/shared/data-access/api/auth';
import {ButtonComponent, TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';
import {injectMutation} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {LoginForm, LoginFormFieldValues} from './forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    LoginFormWrapperComponent,
    TextFieldComponent,
    ButtonComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public form = new LoginForm();
  private authService = inject(AuthService);

  public mutation = injectMutation(() => ({
    mutationFn: (data: LoginRequest) => lastValueFrom(this.authService.login(data)),
  }));

  public submitted(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.mutation.mutate(new LoginRequest(this.form.value as LoginFormFieldValues));
  }
}
