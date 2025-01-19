import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function mergeClasses(...args: Parameters<typeof clsx>) {
  return twMerge(clsx(args));
}
