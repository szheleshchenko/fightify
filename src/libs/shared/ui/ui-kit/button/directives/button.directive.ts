import {computed, Directive, input} from '@angular/core';
import {mergeClasses} from '@core/utils/merge-classes';
import {VariantProps} from 'class-variance-authority';
import {ClassValue} from 'clsx';
import {tv} from 'tailwind-variants';

const buttonVariants = tv({
  base: 'inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
    isDisabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

@Directive({
  selector: '[appButton]',
  standalone: true,
  host: {
    '[class]': 'classes()',
  },
})
export class ButtonDirective {
  public userClasses = input<ClassValue>('', {alias: 'class'});
  public variant = input<ButtonVariant>('default');
  public size = input<ButtonSize>('default');
  public isDisabled = input<boolean>(false);

  public classes = computed(() =>
    mergeClasses(
      buttonVariants({variant: this.variant(), size: this.size(), isDisabled: this.isDisabled()}),
      this.userClasses(),
    ),
  );
}
