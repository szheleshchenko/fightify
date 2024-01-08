import {Component, Input} from '@angular/core';
import {CategoryLabelComponent} from '@libs/news/ui/category-label';
import {News} from '@libs/shared/data-access/api/news';
import {NewsDetailsAppearance} from './types/appearance';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CategoryLabelComponent],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss',
})
export class NewsDetailsComponent {
  @Input() news!: News;
  @Input() appearance: NewsDetailsAppearance = 'dark';
}
