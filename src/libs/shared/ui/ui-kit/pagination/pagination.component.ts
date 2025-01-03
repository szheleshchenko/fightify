import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RepeatPipe} from '@libs/shared/utils/repeat';
import {PaginationItemComponent} from './components';

@Component({
  selector: 'app-pagination',
  imports: [PaginationItemComponent, RepeatPipe],
  templateUrl: 'pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  readonly link = input<string>('');
  readonly currentPage = input<number>(1);
  readonly lastPage = input<number>(1);
}
