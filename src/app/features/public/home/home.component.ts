import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsItemComponent} from '@patterns/news-item';

@Component({
  selector: 'app-home',
  imports: [NewsItemComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
