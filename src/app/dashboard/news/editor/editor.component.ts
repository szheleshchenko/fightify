import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsEditorFormComponent} from '@libs/news/features/news-editor-form';

@Component({
  selector: 'app-dashboard-news-editor',
  standalone: true,
  imports: [NewsEditorFormComponent],
  templateUrl: './editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNewsEditorPageComponent {}
