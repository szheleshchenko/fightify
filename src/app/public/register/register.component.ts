import {Component} from '@angular/core';
import {Breadcrumb, PageComponent} from '@libs/shared/features/page';
import {RegisterFormComponent} from '@libs/user/features/register-form';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [PageComponent, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterPageComponent {
  public breadcrumbs: Array<Breadcrumb> = [
    {
      translationKey: 'SHARED.NAVIGATION.TEXT_LOGIN',
      path: '/login',
    },
  ];
}
