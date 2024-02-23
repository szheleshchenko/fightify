import {Component} from '@angular/core';
import {CheckboxControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent extends CheckboxControlValueAccessor {}
