import {Component, inject, input, OnInit} from '@angular/core';
import {FormControl, NgControl, ReactiveFormsModule} from '@angular/forms';
import {BaseFormControlDirective} from '@libs/shared/utils/form';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: 'text-field.component.html',
})
export class TextFieldComponent extends BaseFormControlDirective<string> implements OnInit {
  public type = input<HTMLInputElement['type']>('text');
  public label = input<string>();
  public description = input<string>();
  public isRequired = input<boolean>(false);
  public ngControl = inject(NgControl);
  public formControl!: FormControl;

  constructor() {
    super();

    this.ngControl.valueAccessor = this;
  }

  public changed(event: Event): void {
    this.valueChanged((event.target as HTMLInputElement).value);
  }

  public ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }
}
