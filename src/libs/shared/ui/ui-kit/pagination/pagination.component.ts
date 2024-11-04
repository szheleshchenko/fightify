import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RepeatPipe} from '@libs/shared/utils/repeat';
import {ButtonDirective} from '../button';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [ButtonDirective, RouterLink, RepeatPipe],
  templateUrl: 'pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  readonly link = input<string>('');
  readonly currentPage = input<number>(1);
  readonly lastPage = input<number>(0);
}
