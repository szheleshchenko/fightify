import {Directive, input, signal} from '@angular/core';
import {AbstractControl, ControlValueAccessor, ValidationErrors, Validator} from '@angular/forms';

@Directive()
export class BaseFormControlDirective<T> implements ControlValueAccessor, Validator {
  public placeholder = input<string>();
  public errors = signal<Array<string>>([]);
  public value = signal<T | undefined>(undefined);
  public disabled: boolean = false;

  public valueChanged(value?: T): void {
    this.onChange(value);
    this.onTouched();
  }

  public onChange!: (value?: T) => void;
  public onTouched!: () => void;

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public registerOnChange(fn: (value?: T) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value?: T): void {
    this.value.set(value);
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    if (control.errors) {
      if (control.errors['required']) {
        this.errors.set(['This field is required.']);
      }

      return control.errors;
    }

    return null;
  }
}
