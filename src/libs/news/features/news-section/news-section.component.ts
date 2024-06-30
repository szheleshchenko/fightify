import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSectionComponent {}
