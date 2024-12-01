import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {RegisterFormComponent} from '@libs/user/features/register-form';

@Component({
  selector: 'app-register',
  imports: [PageComponent, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_LOGIN',
      path: '/login',
    },
  ];
}
