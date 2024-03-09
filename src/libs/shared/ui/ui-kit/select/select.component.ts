import {Component, Input} from '@angular/core';
import {SelectOption} from './models';
import {BaseFormControlDirective} from '@libs/shared/utils/form';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent<T> extends BaseFormControlDirective<T> {
  @Input() options: Array<SelectOption<T>> = [];
  @Input() label!: string;
}
