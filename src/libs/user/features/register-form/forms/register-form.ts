import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InferFormSchema} from '@libs/shared/utils/form';
import {confirmPasswordValidator} from '../utils';

export type RegisterFormFieldValues = {
  username: string;
  password: string;
  confirmPassword: string;
};

export class RegisterForm extends FormGroup<InferFormSchema<RegisterFormFieldValues>> {
  constructor() {
    super(
      {
        username: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(5)],
        }),
        password: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmPassword: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      {validators: [confirmPasswordValidator]},
    );
  }
}
