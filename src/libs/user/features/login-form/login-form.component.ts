import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {ButtonComponent, TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';
import {LoginFormStore} from './store';

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
  providers: [LoginFormStore],
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public readonly links = injectAppLinks();
  public readonly loginFormStore = inject(LoginFormStore);
}
