import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ContentEditorModule} from '@libs/shared/features/content-editor';
import {ButtonComponent, TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {NewsEditorForm} from './forms';

@Component({
  selector: 'app-news-editor-form',
  imports: [ContentEditorModule, TextFieldComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './news-editor-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsEditorFormComponent {
  public form = new NewsEditorForm();
}
