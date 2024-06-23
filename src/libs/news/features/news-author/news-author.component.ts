import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-news-author',
  standalone: true,
  imports: [],
  templateUrl: './news-author.component.html',
  styleUrl: './news-author.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsAuthorComponent {}
