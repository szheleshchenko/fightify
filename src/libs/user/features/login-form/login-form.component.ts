import {Component} from '@angular/core';
import {LoginFormWrapperComponent} from '@libs/user/ui/login-form-wrapper';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LoginFormWrapperComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {}
