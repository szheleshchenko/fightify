import {Component, Input, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseFormControlDirective} from '@libs/shared/utils/form';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: 'text-field.component.html',
  styleUrl: 'text-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true,
    },
  ],
})
export class TextFieldComponent extends BaseFormControlDirective<string> {
  @Input() label?: string;
  @Input() isRequired?: boolean;

  public changed(event: Event): void {
    this.valueChanged((event.target as HTMLInputElement).value);
  }
}
