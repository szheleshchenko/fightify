import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InferFormSchema} from '@libs/shared/utils/form';

export type RegisterFormFieldValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export class RegisterForm extends FormGroup<InferFormSchema<RegisterFormFieldValues>> {
  constructor() {
    super({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      confirmPassword: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
