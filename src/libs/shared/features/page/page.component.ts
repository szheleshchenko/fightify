import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Breadcrumb} from './types';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  @Input() title!: string;
  @Input() breadcrumbs!: Array<Breadcrumb>;
}
