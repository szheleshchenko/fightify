import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InferFormSchema} from '@libs/shared/utils/form';

export type ForgotPasswordFormFieldValues = {
  email: string;
};

export class ForgotPasswordForm extends FormGroup<InferFormSchema<ForgotPasswordFormFieldValues>> {
  constructor() {
    super({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
    });
  }
}
