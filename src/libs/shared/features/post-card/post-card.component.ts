import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {cva} from '@libs/shared/utils/cva';

const postVariants = cva(
  {
    titleClasses: 'mb-1 text-2xl font-mono hover:opacity-70',
    detailsClasses: 'flex gap-3 text-xs text-zinc-500 uppercase font-medium lg:text-sm',
    linksClasses: 'text-black hover:text-red-600',
    isDescriptionShown: false,
    isAuthorShown: false,
    isImageShown: true,
  },
  {
    variants: {
      default: {titleClasses: 'lg:text-4xl lg:mb-2', isDescriptionShown: true, isAuthorShown: true},
      small: {titleClasses: 'lg:text-2xl'},
      footerPost: {
        titleClasses: 'text-base',
        linksClasses: 'text-white',
        detailsClasses: 'lg:text-xs',
        isImageShown: false,
      },
    },
  },
);

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'post-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  public variant = input<Parameters<typeof postVariants>[0]>('default');
  public postVariant = computed(() => {
    console.log(this.variant());
    return postVariants(this.variant());
  });
  public image =
    'https://cdn.vox-cdn.com/thumbor/RQFvaLaZZC_jOAOzV1KblN7nKEM=/0x0:7451x4967/900x600/filters:focal(2777x1347:3969x2539)/cdn.vox-cdn.com/uploads/chorus_image/image/73435906/2159890877.0.jpg';
}
