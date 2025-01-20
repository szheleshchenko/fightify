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
  public type = input<HTMLInputElement['type']>('text');
  public label = input<string>();
  public description = input<string>();
  public isRequired = input<boolean>(false);
  public errorMessage = input<string>();

  public ngControl = inject(NgControl);
  public formControl!: FormControl;

  public placeholder = input<string>();
  public errors = signal<Array<string>>([]);
  public value = signal<string | undefined>(undefined);
  public disabled: boolean = false;

  public onChange!: (value?: string) => void;
  public onTouched!: () => void;

  constructor() {
    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }

  public valueChanged(value?: string): void {
    this.onChange(value);
    this.onTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public registerOnChange(fn: (value?: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value?: string): void {
    this.value.set(value);
  }

  public validate(control: AbstractControl<string>): ValidationErrors | null {
    if (control.errors) {
      if (control.errors['required']) {
        this.errors.set(['This field is required.']);
      }

      return control.errors;
    }

    return null;
  }
}
