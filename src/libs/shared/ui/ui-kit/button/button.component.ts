import {NgClass} from '@angular/common';
import {Component, Input} from '@angular/core';
import {ButtonSize, ButtonVariant} from './types';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: 'button.html',
  styleUrl: 'button.scss',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';

  public get className(): string {
    return ['button', `button-${this.variant}`, `button-${this.size}`].join(' ');
  }
}
