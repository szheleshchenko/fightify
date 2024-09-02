import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  public classes = input<string>();
}
