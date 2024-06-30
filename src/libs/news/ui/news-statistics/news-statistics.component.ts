import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-news-statistics',
  standalone: true,
  imports: [],
  templateUrl: './news-statistics.component.html',
  styleUrl: './news-statistics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsStatisticsComponent {}
