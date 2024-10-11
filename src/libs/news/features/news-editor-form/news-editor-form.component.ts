import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ContentEditorModule} from '@libs/shared/features/content-editor';

@Component({
  selector: 'app-news-editor-form',
  standalone: true,
  imports: [ContentEditorModule],
  templateUrl: './news-editor-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsEditorFormComponent {}
