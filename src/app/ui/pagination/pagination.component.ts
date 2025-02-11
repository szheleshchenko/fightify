import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {PaginationItemComponent} from './components';

@Component({
  selector: 'app-pagination',
  imports: [PaginationItemComponent],
  templateUrl: 'pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  readonly link = input<string>('');
  readonly currentPage = input<number>(1);
  readonly lastPage = input<number>(1);
  readonly pages = computed(() => Array.from({length: this.lastPage()}, (_, index) => index + 1));
}
