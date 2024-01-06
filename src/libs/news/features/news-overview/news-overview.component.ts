import {Component} from '@angular/core';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit/content-card';

@Component({
  selector: 'app-news-overview',
  standalone: true,
  imports: [ContentCardComponent],
  templateUrl: './news-overview.component.html',
  styleUrl: './news-overview.component.scss',
})
export class NewsOverviewComponent {}
