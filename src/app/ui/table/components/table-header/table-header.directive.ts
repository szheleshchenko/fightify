import {computed, Directive, input} from '@angular/core';
import {mergeClasses} from '@core/utils/merge-classes';
import {ClassValue} from 'tailwind-variants';

@Directive({
  selector: '[appTableHeader]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableHeaderDirective {
  public class = input<ClassValue>();
  public classes = computed(() =>
    mergeClasses('[&_th]:border-b [&_th]:py-2 [&_th]:text-left', this.class()),
  );
}
