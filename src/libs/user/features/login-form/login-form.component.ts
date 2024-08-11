import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
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
  public router = inject(Router);

  public action = injectMutation(() => ({
    mutationFn: (data: LoginFormFieldValues) => lastValueFrom(this.authService.login(data)),
    onSuccess: () => this.router.navigate(['/']),
    onError: () => this.form.reset(),
  }));

  public submitted(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.action.mutate(this.form.value as LoginFormFieldValues);
  }
}
