import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsEditorFormComponent} from '@libs/news/features/news-editor-form';
import {PageComponent} from '@libs/shared/features/page';

@Component({
  imports: [PageComponent, NewsEditorFormComponent],
  templateUrl: './editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNewsEditorPageComponent {}
