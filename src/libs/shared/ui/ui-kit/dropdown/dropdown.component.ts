import {NgTemplateOutlet} from '@angular/common';
import {Component, ElementRef, Input, TemplateRef} from '@angular/core';
import {DropdownOption} from '../dropdown-option/models';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() options: Array<DropdownOption> = [];
  @Input() item?: TemplateRef<ElementRef>;
}
