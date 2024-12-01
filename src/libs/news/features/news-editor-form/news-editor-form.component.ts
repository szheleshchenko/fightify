import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ContentEditorModule} from '@libs/shared/features/content-editor';
import {ButtonComponent, TextFieldComponent} from '@libs/shared/ui/ui-kit';
import {DashboardNewsEditorStore} from './news-editor-form.store';

@Component({
  selector: 'app-news-editor-form',
  imports: [ContentEditorModule, TextFieldComponent, ReactiveFormsModule, ButtonComponent],
  providers: [DashboardNewsEditorStore],
  templateUrl: './news-editor-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsEditorFormComponent {
  public store = inject(DashboardNewsEditorStore);
}
