import {FormGroup} from '@angular/forms';
import {InferFormSchema} from '@libs/shared/utils/form';

export type NewsEditorFormFieldValues = {
  content?: string;
};

export class NewsEditorForm extends FormGroup<InferFormSchema<NewsEditorFormFieldValues>> {
  constructor() {
    super({});
  }
}
