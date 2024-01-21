import {Component} from '@angular/core';
import {NewsDetailsComponent} from '@libs/news/ui/news-details';
import {News} from '@libs/shared/data-access/api/news';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit/content-card';

@Component({
  selector: 'app-news-article-view',
  standalone: true,
  imports: [ContentCardComponent, NewsDetailsComponent],
  templateUrl: './news-article-view.component.html',
  styleUrl: './news-article-view.component.scss',
})
export class NewsArticleViewComponent {
  public news: News = {
    category: 'new fight',
    title: 'Francis Ngannou vs. Anthony Joshua booked for Saudi Arabia showdown',
    image:
      'https://cdn.vox-cdn.com/thumbor/DyuYf6N8bqcXKzZuDw2aiSsdLGg=/0x0:7579x5053/750x500/filters:focal(3184x1921:4396x3133):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73027823/1666117273.0.jpg',
    description:
      'Francis Ngannou’s meteoric boxing career continues with a showdown against former heavyweight champ Anthony Joshua in Saudi Arabia, according to a new report.',
  };
}
