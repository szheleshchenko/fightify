import {Component} from '@angular/core';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {ForgotPasswordFormComponent} from '@libs/user/features/forgot-password-form';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [PageComponent, ForgotPasswordFormComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_LOGIN',
      path: '/login',
    },
  ];
}
