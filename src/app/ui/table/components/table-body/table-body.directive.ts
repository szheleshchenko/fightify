import {computed, Directive, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

@Directive({
  selector: '[appTableBody]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableBodyDirective {
  readonly class = input<string>();
  readonly classes = computed(() => twMerge('[&_tr:last-child]:border-0', this.class()));
}
