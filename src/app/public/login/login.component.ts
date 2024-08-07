import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {LoginFormComponent} from '@libs/user/features/login-form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PageComponent, TranslocoDirective, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_LOGIN',
      path: '/login',
    },
  ];
}
