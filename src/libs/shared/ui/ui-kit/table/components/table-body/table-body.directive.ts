import {computed, Directive, input} from '@angular/core';
import {mergeClasses} from '@libs/shared/utils/merge-classes';
import {ClassValue} from 'tailwind-variants';

@Directive({
  selector: '[appTableBody]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableBodyDirective {
  public class = input<ClassValue>();
  protected classes = computed(() => mergeClasses('[&_tr:last-child]:border-0', this.class()));
}
