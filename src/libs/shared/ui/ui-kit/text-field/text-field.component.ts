import {NgClass} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-text-field',
  imports: [NgClass],
  templateUrl: 'text-field.html',
  styleUrl: 'text-field.scss',
})
export class TextFieldComponent {
  @Input() label?: string;
  @Input() placeholder?: string;
}
