import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CheckboxControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends CheckboxControlValueAccessor {}
