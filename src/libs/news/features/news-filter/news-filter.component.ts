import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-news-filter',
  standalone: true,
  imports: [],
  templateUrl: './news-filter.component.html',
  styleUrl: './news-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFilterComponent {}
