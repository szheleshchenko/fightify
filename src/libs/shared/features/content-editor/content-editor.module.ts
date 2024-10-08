import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {QuillConfigModule} from 'ngx-quill';
import {ContentEditorComponent} from './content-editor.component';

@NgModule({
  imports: [
    QuillConfigModule.forRoot({
      modules: {
        syntax: true,
      },
    }),
  ],
  declarations: [ContentEditorComponent],
  exports: [ContentEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentEditorModule {}
