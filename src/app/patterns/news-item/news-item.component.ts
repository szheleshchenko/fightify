import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {tv, VariantProps} from 'tailwind-variants';

const newsItemVariant = tv({
  slots: {
    wrapper: 'flex flex-col gap-5',
    image: 'relative block w-full aspect-[1.69] overflow-hidden select-none',
    content: 'flex flex-col gap-1',
    title: 'text-2xl font-extrabold -tracking-[0.5px] leading-tight hover:opacity-70',
    description: 'hidden text-base text-muted-foreground',
    meta: 'flex gap-3 text-sm font-medium uppercase text-muted-foreground',
  },
  variants: {
    variant: {
      featured: {
        content: 'lg:gap-3',
        title: 'lg:text-3xl',
        description: 'lg:inline',
      },
      'horizontal': {
        wrapper: 'md:flex-row',
        image: 'md:w-64 md:min-w-64 md:h-52',
        content: 'md:gap-3',
        title: 'md:text-3xl',
        description: 'md:inline',
        meta: 'mt-auto',
      },
      'horizontal-reversed': {
        wrapper: 'lg:flex-row-reverse lg:items-center',
        image: 'lg:aspect-[1.15]',
        content: 'lg:gap-3',
        title: 'lg:text-3xl',
        description: 'lg:inline',
      },
      'horizontal-small': {
        wrapper: 'flex-row items-center gap-3',
        image: 'w-20 h-20 min-w-20 min-h-20',
        content: 'gap-1',
        title: 'text-sm',
        meta: 'text-xs',
      },
    },
  },
});

type NewsItemVariant = VariantProps<typeof newsItemVariant>['variant'];

@Component({
  selector: 'app-news-item',
  imports: [RouterLink],
  templateUrl: './news-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsItemComponent {
  readonly title = input<string>('');
  readonly variant = input<NewsItemVariant>();
  readonly newsItemClasses = computed(() => newsItemVariant({variant: this.variant()}));

  readonly image =
    'https://cdn.vox-cdn.com/thumbor/RQFvaLaZZC_jOAOzV1KblN7nKEM=/0x0:7451x4967/900x600/filters:focal(2777x1347:3969x2539)/cdn.vox-cdn.com/uploads/chorus_image/image/73435906/2159890877.0.jpg';
}
