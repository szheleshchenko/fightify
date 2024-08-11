import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {PageComponent} from '@libs/shared/features/page';
import {LoginFormComponent} from '@libs/user/features/login-form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PageComponent, TranslocoDirective, LoginFormComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {}
