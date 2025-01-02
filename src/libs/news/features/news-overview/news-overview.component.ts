import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {PaginationResponse} from '@libs/shared/data-access/api-client';
import {News} from '@libs/shared/data-access/api/news';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-news-overview',
  imports: [ContentCardComponent],
  templateUrl: './news-overview.component.html',
  styleUrl: './news-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsOverviewComponent {
  @Input() news?: PaginationResponse<News>;
}
