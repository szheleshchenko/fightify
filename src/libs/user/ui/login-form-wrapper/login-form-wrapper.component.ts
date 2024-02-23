import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-login-form-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './login-form-wrapper.component.html',
  styleUrl: './login-form-wrapper.component.scss',
})
export class LoginFormWrapperComponent {
  @Input() heading!: string;
  @Input() subheading?: string;
}
