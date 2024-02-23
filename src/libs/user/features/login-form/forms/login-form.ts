import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InferFormSchema} from '@libs/shared/utils/form';

export type LoginFormFieldValues = {
  email: string;
  password: string;
};

export class LoginForm extends FormGroup<InferFormSchema<LoginFormFieldValues>> {
  constructor() {
    super({
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }
}
