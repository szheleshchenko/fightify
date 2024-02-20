import {Component} from '@angular/core';
import {NewsItemComponent} from '@libs/news/features/news-item';
import {News} from '@libs/shared/data-access/api/news';

@Component({
  selector: 'app-popular-news',
  standalone: true,
  imports: [NewsItemComponent],
  templateUrl: './popular-news.component.html',
  styleUrl: './popular-news.component.scss',
})
export class PopularNewsComponent {
  public news: Array<News> = [
    {
      category: 'new fight',
      title: 'Francis Ngannou vs. Anthony Joshua booked for Saudi Arabia showdown',
      image:
        'https://cdn.vox-cdn.com/thumbor/DyuYf6N8bqcXKzZuDw2aiSsdLGg=/0x0:7579x5053/750x500/filters:focal(3184x1921:4396x3133):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73027823/1666117273.0.jpg',
      description:
        'Francis Ngannou’s meteoric boxing career continues with a showdown against former heavyweight champ Anthony Joshua in Saudi Arabia, according to a new report.',
    },
    {
      category: 'injury',
      title: 'Stipe Miocic responds to Tom Aspinall over flurry of calls for Jon Jones fight',
      image:
        'https://cdn.vox-cdn.com/thumbor/WspLIND-l8DhnHzX6yOttVV1VrE=/0x0:4432x2955/920x613/filters:focal(1843x929:2551x1637):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73028448/1387900247.0.jpg',
      description:
        'A lot of MMA observers think former UFC heavyweight Stipe Miocic should step aside to decide the best in the big-man division. That includes interim champ Tom Aspinall, who’s publicly campaigned to unify the belt against undisputed champ Jon Jones.',
    },
    {
      category: 'injury',
      title: 'Raul Rosas Jr. faces Ricky Turcios at UFC Mexico City',
      image:
        'https://cdn.vox-cdn.com/thumbor/wvM1wnA3ZVqr1fnXxQe0dAbsYwQ=/0x0:4257x2970/920x613/filters:focal(1807x380:2487x1060):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73028385/1685727351.0.jpg',
      description:
        'UFC phenom Raul Rosas Jr. will take on Ricky Turcios at UFC Mexico City. Multiple people with knowledge of the promotion’s plans confirmed the fight to MMA Fighting after an initial report from Eurosport NL.',
    },
  ];
}
