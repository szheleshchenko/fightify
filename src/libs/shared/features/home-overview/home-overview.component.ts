import {Component} from '@angular/core';
import {EventCardComponent} from '@libs/event/features/event-card';
import {FeaturedFighterComponent} from '@libs/fighter/features/featured-fighter';
import {HomeNewsSectionComponent} from '@libs/news/features/home-news-section';
import {VideoCardComponent} from '@libs/news/features/video-card';
import {Event} from '@libs/shared/data-access/api/event';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-home-overview',
  standalone: true,
  imports: [
    ContentCardComponent,
    HomeNewsSectionComponent,
    EventCardComponent,
    VideoCardComponent,
    FeaturedFighterComponent,
  ],
  templateUrl: './home-overview.component.html',
  styleUrl: './home-overview.component.scss',
})
export class HomeOverviewComponent {
  public events: Array<Event> = [
    {
      status: 'upcoming',
    },
    {
      status: 'past',
    },
  ];
}
