import {NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {DropdownOption} from './models';

@Component({
  selector: 'app-dropdown',
  imports: [NgTemplateOutlet, TranslocoDirective, RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() options: Array<DropdownOption> = [];
  @Input() item?: TemplateRef<ElementRef>;
}
