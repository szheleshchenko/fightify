import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [NgClass],
  templateUrl: './toast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  public title = signal<string>('');
  public description = signal<string | undefined>('');

  protected animationClass = signal<string>('animate-toast-in');

  public hide(): void {
    this.animationClass.set('animate-toast-out');
  }
}
