import {Directive, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, ValidationErrors, Validator} from '@angular/forms';

@Directive()
export class BaseFormControlDirective<T> implements ControlValueAccessor, Validator {
  @Input() placeholder?: string;

  public value?: T;
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
    this.value = value;
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    if (control.errors) {
      return control.errors;
    }

    return null;
  }
}
