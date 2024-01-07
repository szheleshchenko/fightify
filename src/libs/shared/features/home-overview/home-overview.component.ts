import {Component} from '@angular/core';
import {HomeNewsSectionComponent} from '@libs/news/features/home-news-section';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit/content-card';

@Component({
  selector: 'app-home-overview',
  standalone: true,
  imports: [ContentCardComponent, HomeNewsSectionComponent],
  templateUrl: './home-overview.component.html',
  styleUrl: './home-overview.component.scss',
})
export class HomeOverviewComponent {}
