import {Component, Input} from '@angular/core';
import {DropdownOption} from './models';

@Component({
  selector: 'app-dropdown-option',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-option.component.html',
  styleUrl: './dropdown-option.component.scss',
})
export class DropdownOptionComponent {
  @Input() option!: DropdownOption;
}
