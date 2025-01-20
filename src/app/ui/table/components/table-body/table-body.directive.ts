import {computed, Directive, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

@Directive({
  selector: '[appTableBody]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableBodyDirective {
  public class = input<string>();
  protected classes = computed(() => twMerge('[&_tr:last-child]:border-0', this.class()));
}
