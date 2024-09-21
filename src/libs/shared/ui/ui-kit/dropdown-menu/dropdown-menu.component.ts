import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: 'dropdown-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  public classes = input<string>();
  public isOpen = signal(false);

  public toggled(): void {
    this.isOpen.set(!this.isOpen());
  }
}
