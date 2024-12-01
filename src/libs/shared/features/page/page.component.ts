import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {Breadcrumb} from './types';

@Component({
  selector: 'app-page',
  imports: [RouterLink, TranslocoDirective],
  templateUrl: './page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  @Input() title!: string;
  @Input() breadcrumbs!: Array<Breadcrumb>;
}
