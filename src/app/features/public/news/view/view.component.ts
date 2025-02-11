import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BreadcrumbsComponent} from '@patterns/breadcrumbs';
import {NewsItemComponent} from '@patterns/news-item';

@Component({
  selector: 'app-view',
  imports: [BreadcrumbsComponent, NewsItemComponent],
  templateUrl: './view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewComponent {}
