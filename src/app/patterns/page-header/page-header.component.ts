import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BreadcrumbsComponent} from './ui/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-page-header',
  imports: [BreadcrumbsComponent],
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly withBreadcrumbs = input<boolean>(true);
}
