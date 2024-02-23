import {Component} from '@angular/core';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {LoginFormComponent} from '@libs/user/features/login-form';
import {TranslocoDirective} from '@ngneat/transloco';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PageComponent, TranslocoDirective, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_LOGIN',
      path: '/login',
    },
  ];
}
