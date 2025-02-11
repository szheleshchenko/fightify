import {CdkMenuItem} from '@angular/cdk/menu';
import {Directive, computed, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

@Directive({
  selector: '[appMenuItem]',
  standalone: true,
  host: {
    '[class]': 'classes()',
  },
  hostDirectives: [CdkMenuItem],
})
export class MenuItemDirective {
  readonly class = input<string>('');
  readonly classes = computed(() =>
    twMerge(
      'group w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground disabled:pointer-events-none disabled:opacity-50',
      this.class(),
    ),
  );
}
