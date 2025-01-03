import {ChangeDetectionStrategy, Component, inject, input, OnInit} from '@angular/core';
import {FormControl, NgControl, ReactiveFormsModule} from '@angular/forms';
import {TranslocoDirective} from '@jsverse/transloco';
import {BaseFormControlDirective} from '@libs/shared/utils/form';

@Component({
  selector: 'app-text-field',
  imports: [ReactiveFormsModule, TranslocoDirective],
  templateUrl: 'text-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent extends BaseFormControlDirective<string> implements OnInit {
  public type = input<HTMLInputElement['type']>('text');
  public label = input<string>();
  public description = input<string>();
  public isRequired = input<boolean>(false);
  public errorMessage = input<string>();

  public ngControl = inject(NgControl);
  public formControl!: FormControl;

  constructor() {
    super();

    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }
}
