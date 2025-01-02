import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {ForgotPasswordFormComponent} from '@libs/user/features/forgot-password-form';

@Component({
  selector: 'app-forgot-password',
  imports: [PageComponent, ForgotPasswordFormComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_LOGIN',
      path: '/login',
    },
  ];
}
