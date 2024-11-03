import {ChangeDetectionStrategy, Component, computed, input, output} from '@angular/core';
import {ButtonDirective} from '../button';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: 'pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  readonly currentPage = input<number>(1);
  readonly lastPage = input<number>(0);
  readonly pageChanged = output<number>();

  protected pages = computed(() => Array.from({length: this.lastPage()}, (_, index) => index + 1));
}
