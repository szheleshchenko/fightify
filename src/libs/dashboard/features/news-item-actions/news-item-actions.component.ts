import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-news-item-actions',
  standalone: true,
  imports: [],
  templateUrl: './news-item-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsItemActionsComponent {}
