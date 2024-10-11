import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {QuillConfigModule, QuillEditorComponent} from 'ngx-quill';
import {ContentEditorComponent} from './content-editor.component';

@NgModule({
  imports: [
    QuillConfigModule.forRoot({
      modules: {
        syntax: true,
      },
    }),
    QuillEditorComponent,
  ],
  declarations: [ContentEditorComponent],
  exports: [ContentEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentEditorModule {}
