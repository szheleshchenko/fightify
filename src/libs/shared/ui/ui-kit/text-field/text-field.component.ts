import {NgClass} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [NgClass],
  templateUrl: 'text-field.component.html',
  styleUrl: 'text-field.component.scss',
})
export class TextFieldComponent {
  @Input() label?: string;
  @Input() placeholder?: string;
}
