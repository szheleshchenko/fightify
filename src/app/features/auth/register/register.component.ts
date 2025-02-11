import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {ApiError} from '@core/api-client';
import {AuthService, AuthStore} from '@core/auth';
import {Feature} from '@core/enums';
import {TranslocoDirective} from '@jsverse/transloco';
import {injectMutation} from '@tanstack/angular-query-experimental';
import {ButtonComponent} from '@ui/button';
import {TextFieldComponent} from '@ui/text-field';
import {lastValueFrom} from 'rxjs';
import {RegisterForm, RegisterFormFieldValues} from './forms';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    TranslocoDirective,
    TextFieldComponent,
    RouterLink,
    ButtonComponent,
  ],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent {
  readonly form = new RegisterForm();
  readonly features = Feature;

  #authService = inject(AuthService);
  #router = inject(Router);
  #authStore = inject(AuthStore);

  readonly action = injectMutation(() => ({
    mutationFn: (data: RegisterFormFieldValues) => lastValueFrom(this.#authService.register(data)),
    onSuccess: (response) => {
      this.#authStore.authorize(response);
      this.#router.navigate([this.features.HOME]);
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
