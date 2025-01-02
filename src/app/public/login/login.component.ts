import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PageComponent} from '@libs/shared/features/page';
import {LoginFormComponent} from '@libs/user/features/login-form';

@Component({
  imports: [PageComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {}
