import {NgTemplateOutlet} from '@angular/common';
import {Component, ElementRef, Input, TemplateRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DropdownOption, DropdownOptionComponent} from '@libs/shared/ui/ui-kit/dropdown-option';
import {TranslocoDirective} from '@ngneat/transloco';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgTemplateOutlet, DropdownOptionComponent, TranslocoDirective, RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() options: Array<DropdownOption> = [];
  @Input() item?: TemplateRef<ElementRef>;
}
