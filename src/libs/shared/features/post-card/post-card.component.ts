import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {mergeClasses} from '@libs/shared/utils/merge-classes';
import {cva, VariantProps} from 'class-variance-authority';

const titleVariants = cva('mb-1 text-2xl font-mono hover:opacity-70', {
  variants: {
    variant: {
      default: 'lg:text-4xl lg:mb-2',
      small: 'lg:text-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type TitleVariant = VariantProps<typeof titleVariants>['variant'];

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'post-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  public titleVariant = input<TitleVariant>('default');

  public titleClasses = computed(() => titleVariants({variant: this.titleVariant()}));
  public detailsClasses = computed(() => mergeClasses());
  public isDescriptionShown = computed(() => this.titleVariant() === 'default');
  public isAuthorShown = computed(() => this.titleVariant() === 'default');

  public image =
    'https://cdn.vox-cdn.com/thumbor/RQFvaLaZZC_jOAOzV1KblN7nKEM=/0x0:7451x4967/900x600/filters:focal(2777x1347:3969x2539)/cdn.vox-cdn.com/uploads/chorus_image/image/73435906/2159890877.0.jpg';
}
