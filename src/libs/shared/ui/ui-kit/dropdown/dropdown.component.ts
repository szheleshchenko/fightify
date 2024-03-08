import {NgTemplateOutlet} from '@angular/common';
import {Component, ElementRef, Input, TemplateRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@ngneat/transloco';
import {DropdownOption} from './models';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgTemplateOutlet, TranslocoDirective, RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() options: Array<DropdownOption> = [];
  @Input() item?: TemplateRef<ElementRef>;
}
