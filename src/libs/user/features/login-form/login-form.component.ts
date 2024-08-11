import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {AuthService} from '@libs/shared/data-access/api/auth';
import {AppLinks} from '@libs/shared/features/app-links';
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
    TranslocoDirective,
  ],
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public form = new LoginForm();
  public links = inject(AppLinks);
  private authService = inject(AuthService);

  public mutation = injectMutation(() => ({
    mutationFn: (data: LoginFormFieldValues) => lastValueFrom(this.authService.login(data)),
  }));

  public submitted(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.mutation.mutate(this.form.value as LoginFormFieldValues);
  }
}
