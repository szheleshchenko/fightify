import {computed, Directive, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

@Directive({
  selector: '[appTableHeader]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableHeaderDirective {
  readonly class = input<string>();
  readonly classes = computed(() =>
    twMerge('[&_th]:border-b [&_th]:py-2 [&_th]:text-left', this.class()),
  );
}
