import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {injectAppLinks} from '@libs/shared/features/app-links';
import {ButtonComponent, TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';
import {RegisterFormStore} from './store';

@Component({
  selector: 'app-register-form',
  imports: [
    RouterLink,
    ButtonComponent,
    TextFieldComponent,
    TranslocoDirective,
    ReactiveFormsModule,
    LoginFormWrapperComponent,
    JsonPipe,
  ],
  templateUrl: './register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RegisterFormStore],
})
export class RegisterFormComponent {
  public readonly links = injectAppLinks();
  public readonly registerFormStore = inject(RegisterFormStore);
}
