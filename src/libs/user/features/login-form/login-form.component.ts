import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {ApiError} from '@libs/shared/data-access/api-client';
import {AuthService, AuthStore} from '@libs/shared/data-access/api/auth';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {ButtonComponent, TextFieldComponent, ToastService} from '@libs/shared/ui/ui-kit';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';
import {injectMutation} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {LoginForm, LoginFormFieldValues} from './forms';
import {LoginFormStore} from './store';

@Component({
  selector: 'app-login-form',
  imports: [
    LoginFormWrapperComponent,
    TextFieldComponent,
    ButtonComponent,
    RouterLink,
    ReactiveFormsModule,
    TranslocoDirective,
  ],
  providers: [LoginFormStore],
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public form = new LoginForm();
  public links = injectAppLinks();
  private authService = inject(AuthService);
  public router = inject(Router);
  public authStore = inject(AuthStore);
  private toastService = inject(ToastService);

  public action = injectMutation(() => ({
    mutationFn: (data: LoginFormFieldValues) => lastValueFrom(this.authService.login(data)),
    onSuccess: (response) => {
      this.form.reset();
      this.authStore.authorize(response);
      this.router.navigate([this.links.root]);
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
