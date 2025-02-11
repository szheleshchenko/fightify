import {computed, Directive, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

@Directive({
  selector: '[appTableRow]',
  host: {
    '[class]': 'classes()',
  },
})
export class TableRowDirective {
  readonly class = input<string>();
  readonly classes = computed(() =>
    twMerge(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      this.class(),
    ),
  );
}
