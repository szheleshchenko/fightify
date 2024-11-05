import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonDirective} from '@libs/shared/ui/ui-kit/button';

@Component({
  selector: 'app-pagination-item',
  standalone: true,
  imports: [RouterLink, ButtonDirective],
  templateUrl: './item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationItemComponent {
  readonly link = input<string>('/');
  readonly page = input<number>(0);
  readonly isActive = input<boolean>(false);
}
