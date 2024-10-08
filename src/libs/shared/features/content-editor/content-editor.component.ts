import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrl: './content-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentEditorComponent {}
