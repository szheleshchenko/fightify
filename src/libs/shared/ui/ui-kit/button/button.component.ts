import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ButtonSize, ButtonVariant} from './types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';

  public get className(): string {
    return ['button', `button-${this.variant}`, `button-${this.size}`].join(' ');
  }
}
