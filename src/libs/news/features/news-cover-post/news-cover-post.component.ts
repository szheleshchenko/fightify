import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NewsDetailsComponent} from '@libs/news/ui/news-details';
import {News} from '@libs/shared/data-access/api/news';
import {NewsCoverPostVariant} from './types';

@Component({
  selector: 'app-news-cover-post',
  standalone: true,
  imports: [RouterLink, NewsDetailsComponent],
  templateUrl: './news-cover-post.component.html',
  styleUrl: './news-cover-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCoverPostComponent {
  @Input() news!: News;
  @Input() variant: NewsCoverPostVariant = 'left';
}
