import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NewsDetailsComponent} from '@libs/news/ui/news-details';
import {News} from '@libs/shared/data-access/api/news';

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [NewsDetailsComponent],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsItemComponent {
  @Input() news!: News;
}
