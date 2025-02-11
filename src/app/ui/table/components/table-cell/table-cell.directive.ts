import {computed, Directive, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';
import {ClassValue} from 'tailwind-variants';

@Directive({
  selector: '[appTableCell]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableCellDirective {
  readonly class = input<ClassValue>();
  readonly classes = computed(() => twMerge('p-4 align-middle', this.class()));
}
