import {FormControl, FormGroup} from '@angular/forms';
import {InferFormSchema} from '@libs/shared/utils/form';

export type NewsEditorFormFieldValues = {
  title: string;
  description?: string;
  content?: string;
};

export class NewsEditorForm extends FormGroup<InferFormSchema<NewsEditorFormFieldValues>> {
  constructor() {
    super({
      title: new FormControl<string>('', {
        nonNullable: true,
      }),
      description: new FormControl<string>('', {
        nonNullable: true,
      }),
      content: new FormControl<string>('', {
        nonNullable: true,
      }),
    });
  }
}
