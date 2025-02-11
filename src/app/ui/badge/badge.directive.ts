import {computed, Directive, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';
import {tv, VariantProps} from 'tailwind-variants';

const badgeVariants = tv({
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variants: {
    variant: {
      default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
      secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive:
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
      outline: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];

@Directive({
  selector: '[appBadge]',
  host: {
    '[class]': 'classes()',
  },
})
export class BadgeDirective {
  readonly class = input<string>();
  readonly variant = input<BadgeVariant>('default');
  readonly classes = computed(() =>
    twMerge(badgeVariants({variant: this.variant()}), this.class()),
  );
}
