import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InferFormSchema} from '@libs/shared/utils/form';

export type LoginFormFieldValues = {
  username: string;
  password: string;
};

export class LoginForm extends FormGroup<InferFormSchema<LoginFormFieldValues>> {
  constructor() {
    super({
      username: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }
}
