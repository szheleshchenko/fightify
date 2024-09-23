import {CdkMenu, CdkMenuTrigger} from '@angular/cdk/menu';
import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CdkMenuTrigger, CdkMenu],
  templateUrl: 'dropdown-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  public align = input<'start' | 'center' | 'end'>('start');
  public menuPosition = computed(() => [
    {
      originX: this.align(),
      originY: 'bottom',
      overlayX: this.align(),
      overlayY: 'top',
    },
    {
      originX: this.align(),
      originY: 'top',
      overlayX: this.align(),
      overlayY: 'bottom',
    },
  ]);
}
