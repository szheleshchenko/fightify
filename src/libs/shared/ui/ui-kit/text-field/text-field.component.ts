import {Component, forwardRef, input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseFormControlDirective} from '@libs/shared/utils/form';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: 'text-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true,
    },
  ],
})
export class TextFieldComponent extends BaseFormControlDirective<string> {
  public type = input<HTMLInputElement['type']>('text');
  public label = input<string>();
  public description = input<string>();
  public isRequired = input<boolean>(false);

  public changed(event: Event): void {
    this.valueChanged((event.target as HTMLInputElement).value);
  }
}
