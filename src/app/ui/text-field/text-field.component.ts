import {ChangeDetectionStrategy, Component, inject, input, OnInit, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-text-field',
  imports: [ReactiveFormsModule],
  templateUrl: 'text-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent implements ControlValueAccessor, Validator, OnInit {
  readonly type = input<HTMLInputElement['type']>('text');
  readonly label = input<string>();
  readonly description = input<string>();
  readonly isRequired = input<boolean>(false);
  readonly errorMessage = input<string>();
  readonly placeholder = input<string>();

  readonly ngControl = inject(NgControl);
  formControl!: FormControl;
  errors = signal<Array<string>>([]);
  value = signal<string | undefined>(undefined);
  disabled: boolean = false;

  onChange!: (value?: string) => void;
  onTouched!: () => void;

  constructor() {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }

  valueChanged(value?: string): void {
    this.onChange(value);
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: (value?: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value?: string): void {
    this.value.set(value);
  }

  validate(control: AbstractControl<string>): ValidationErrors | null {
    if (control.errors) {
      if (control.errors['required']) {
        this.errors.set(['This field is required.']);
      }

      return control.errors;
    }

    return null;
  }
}
