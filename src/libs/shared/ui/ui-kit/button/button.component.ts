import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {cva} from '@libs/shared/utils/cva';
import {SpinnerComponent} from '../spinner';

const buttonVariants = cva(
  'inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      default: 'w-full h-10 px-4 py-2 text-white bg-slate-950 hover:bg-slate-950/90',
    },
  },
);

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public variant = input<Parameters<typeof buttonVariants>[0]>('default');
  public isLoading = input<boolean>(false);
  public isDisabled = input<boolean>(false);
  public classes = computed(() => buttonVariants(this.variant()));
}
