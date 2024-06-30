import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-login-form-wrapper',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-form-wrapper.component.html',
  styleUrl: './login-form-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormWrapperComponent {
  @Input() buttonText!: string;
  @Input() heading!: string;
  @Input() subheading?: string;
}
