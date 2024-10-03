import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {tv, VariantProps} from 'tailwind-variants';

const newsItemVariant = tv({
  slots: {
    wrapper: 'flex flex-col gap-5',
    image: 'relative block w-full aspect-[1.69] overflow-hidden',
    content: 'flex flex-col gap-1',
    title: 'text-2xl font-mono hover:opacity-70',
    description: 'hidden text-base text-muted-foreground',
    meta: 'flex gap-3 text-sm font-medium uppercase text-muted-foreground',
  },
  variants: {
    variant: {
      featured: {
        content: 'gap-3',
        title: 'lg:text-4xl',
        description: 'lg:inline',
      },
      'horizontal-featured': {
        wrapper: 'flex-row-reverse items-center',
        image: 'aspect-[1.15]',
        content: 'gap-3',
        title: 'lg:text-3xl',
        description: 'lg:inline',
      },
    },
  },
});

type NewsItemVariant = VariantProps<typeof newsItemVariant>['variant'];

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsItemComponent {
  public variant = input<NewsItemVariant>();

  public newsItem = computed(() => newsItemVariant({variant: this.variant()}));

  public image =
    'https://cdn.vox-cdn.com/thumbor/RQFvaLaZZC_jOAOzV1KblN7nKEM=/0x0:7451x4967/900x600/filters:focal(2777x1347:3969x2539)/cdn.vox-cdn.com/uploads/chorus_image/image/73435906/2159890877.0.jpg';
}
