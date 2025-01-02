import {computed, Directive, input} from '@angular/core';
import {mergeClasses} from '@libs/shared/utils/merge-classes';
import {ClassValue} from 'tailwind-variants';

@Directive({
  selector: '[appTableCell]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableCellDirective {
  public class = input<ClassValue>();
  protected classes = computed(() => mergeClasses('p-4 align-middle', this.class()));
}
