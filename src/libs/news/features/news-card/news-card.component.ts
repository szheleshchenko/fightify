import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CategoryLabelComponent} from '@libs/news/ui/category-label';
import {NewsDetailsComponent} from '@libs/news/ui/news-details';
import {News} from '@libs/shared/data-access/api/news';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit/content-card';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [ContentCardComponent, RouterLink, CategoryLabelComponent, NewsDetailsComponent],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  @Input() news!: News;
}
