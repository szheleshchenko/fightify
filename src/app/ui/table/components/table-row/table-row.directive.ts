import {computed, Directive, input} from '@angular/core';
import {mergeClasses} from '@core/utils/merge-classes';
import {ClassValue} from 'tailwind-variants';

@Directive({
  selector: '[appTableRow]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableRowDirective {
  public class = input<ClassValue>();
  protected classes = computed(() =>
    mergeClasses(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      this.class(),
    ),
  );
}
