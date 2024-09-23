import {computed, Directive, input} from '@angular/core';
import {mergeClasses} from '@libs/shared/utils/merge-classes';
import {cva, VariantProps} from 'class-variance-authority';
import {ClassValue} from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'w-full h-10 px-4 py-2 text-white bg-slate-950 hover:bg-slate-950/90',
      },
      isDisabled: {
        true: 'pointer-events-none opacity-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];

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
  public isDisabled = input<boolean>(false, {alias: 'disabled'});

  public classes = computed(() =>
    mergeClasses(
      buttonVariants({variant: this.variant(), isDisabled: this.isDisabled()}),
      this.userClasses(),
    ),
  );
}
