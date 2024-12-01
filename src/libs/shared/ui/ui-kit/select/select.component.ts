import {Component, ElementRef, HostListener, Input, ViewChild, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseFormControlDirective} from '@libs/shared/utils/form';
import {SelectOption} from './models';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent<T> extends BaseFormControlDirective<SelectOption<T>> {
  @ViewChild('select') select!: ElementRef<HTMLDivElement>;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  @Input() options: Array<SelectOption<T>> = [];
  @Input() label!: string;

  @HostListener('document:mousedown', ['$event'])
  public onOutsideClick(event: MouseEvent): void {
    if (!this.select.nativeElement.contains(event.target as Node)) {
      this.disableTrigger();
    }
  }

  public disableTrigger(): void {
    this.input.nativeElement.checked = false;
  }

  public changed(option: SelectOption<T>): void {
    this.disableTrigger();
    this.valueChanged(option);
    this.writeValue(option);
  }
}
