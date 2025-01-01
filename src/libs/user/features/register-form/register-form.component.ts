import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {ApiError} from '@libs/shared/data-access/api-client';
import {AuthService, AuthStore} from '@libs/shared/data-access/api/auth';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {ButtonComponent, TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';
import {injectMutation} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {RegisterForm, RegisterFormFieldValues} from './forms';

@Component({
  selector: 'app-register-form',
  imports: [
    RouterLink,
    ButtonComponent,
    TextFieldComponent,
    TranslocoDirective,
    ReactiveFormsModule,
    LoginFormWrapperComponent,
  ],
  templateUrl: './register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  public form = new RegisterForm();
  public links = injectAppLinks();
  private authService = inject(AuthService);
  private router = inject(Router);
  private authStore = inject(AuthStore);

  public action = injectMutation(() => ({
    mutationFn: (data: RegisterFormFieldValues) => lastValueFrom(this.authService.login(data)),
    onSuccess: (response) => {
      this.authStore.authorize(response);
      this.router.navigate([this.links.root]);
    },
    onError: (error) => {
      this.form.enable();

      if (error instanceof ApiError) {
        error.errors.forEach((error) => {
          const control = this.form.get(error.property);

          control?.setErrors({['server']: error.message});
          control?.markAsTouched();
        });
      }
    },
  }));

  public submitted(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.form.disable();
    this.action.mutate(this.form.value as RegisterFormFieldValues);
  }
}
