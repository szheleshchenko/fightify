import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiError} from '@core/api-client';
import {AuthService, AuthStore} from '@core/auth';
import {Feature} from '@core/enums';
import {TranslocoDirective} from '@jsverse/transloco';
import {injectMutation} from '@tanstack/angular-query-experimental';
import {ButtonComponent} from '@ui/button';
import {TextFieldComponent} from '@ui/text-field';
import {lastValueFrom} from 'rxjs';
import {LoginForm, LoginFormFieldValues} from './forms';

@Component({
  selector: 'app-login',
  imports: [TextFieldComponent, ReactiveFormsModule, TranslocoDirective, ButtonComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  readonly form = new LoginForm();
  readonly #authService = inject(AuthService);
  readonly #authStore = inject(AuthStore);
  readonly #router = inject(Router);

  readonly action = injectMutation(() => ({
    mutationFn: (data: LoginFormFieldValues) => lastValueFrom(this.#authService.login(data)),
    onSuccess: (response) => {
      this.form.reset();
      this.#authStore.authorize(response);
      this.#router.navigate([Feature.HOME]);
    },
    onError: (error) => {
      this.form.reset();
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
    this.action.mutate(this.form.value as LoginFormFieldValues);
  }
}
