import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

@Component({
  selector: 'app-menu-separator',
  standalone: true,
  template: '',
  host: {
    '[class]': 'classes()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSeparatorComponent {
  readonly class = input<string>('');
  public classes = computed(() => twMerge('block -mx-1 my-1 h-px bg-gray-200', this.class()));
}
