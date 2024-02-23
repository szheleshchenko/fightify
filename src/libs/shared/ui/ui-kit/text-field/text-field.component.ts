import {Component, Input, forwardRef} from '@angular/core';
import {DefaultValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
export class TextFieldComponent extends DefaultValueAccessor {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() isRequired?: boolean;

  public value?: string;

  public override writeValue(value?: string): void {
    this.value = value;
  }

  public changed(event: Event): void {
    this.onChange((event.target as HTMLInputElement).value);
    this.onTouched();
  }
}
