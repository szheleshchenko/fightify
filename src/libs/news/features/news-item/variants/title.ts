import {cva} from 'class-variance-authority';

export const titleVariants = cva('mb-1 text-2xl font-mono hover:opacity-70', {
  variants: {
    variant: {
      default: 'lg:text-4xl lg:mb-2',
      small: 'lg:text-2xl',
      medium: 'lg:text-[34px]',
      horizontal: 'lg:text-[34px]',
      'horizontal-small': 'lg:text-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
