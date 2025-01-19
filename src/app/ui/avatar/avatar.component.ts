import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {tv, VariantProps} from 'tailwind-variants';

const avatarVariants = tv({
  base: 'relative aspect-square overflow-hidden',
  variants: {
    size: {
      md: 'w-7 h-7 min-w-7 min-h-7',
    },
    shape: {
      round: 'rounded-full',
      square: 'rounded-none',
    },
  },
  defaultVariants: {
    shape: 'round',
    size: 'md',
  },
});

export type AvatarSize = VariantProps<typeof avatarVariants>['size'];
export type AvatarShape = VariantProps<typeof avatarVariants>['shape'];

@Component({
  selector: 'app-avatar',
  template: `
    <div [class]="classes()">
      <img [src]="src()" [alt]="name()" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  readonly src = input.required<string>();
  readonly name = input<string>();
  readonly size = input<AvatarSize>('md');
  readonly shape = input<AvatarShape>('round');

  readonly classes = computed(() => avatarVariants({size: this.size(), shape: this.shape()}));
}
