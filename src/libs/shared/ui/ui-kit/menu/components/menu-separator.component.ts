import {Component, computed, input} from '@angular/core';
import {mergeClasses} from '@libs/shared/utils/merge-classes';
import type {ClassValue} from 'clsx';

@Component({
  selector: 'app-menu-separator',
  standalone: true,
  template: '',
  host: {
    '[class]': 'classes()',
  },
})
export class MenuSeparatorComponent {
  public readonly userClasses = input<ClassValue>('', {alias: 'class'});
  public classes = computed(() =>
    mergeClasses('block -mx-1 my-1 h-px bg-gray', this.userClasses()),
  );
}
