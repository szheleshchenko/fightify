import {CdkMenuTrigger} from '@angular/cdk/menu';
import {Directive, Input, type TemplateRef, inject} from '@angular/core';

export type MenuAlign = 'start' | 'center' | 'end';

@Directive({
  selector: '[appDropdownMenuTriggerFor]',
  standalone: true,
  hostDirectives: [
    {directive: CdkMenuTrigger, inputs: ['cdkMenuTriggerFor: appDropdownMenuTriggerFor']},
  ],
})
export class DropdownMenuTriggerDirective {
  private readonly cdkTrigger = inject(CdkMenuTrigger, {host: true});

  @Input()
  public set align(align: MenuAlign) {
    this.cdkTrigger.menuPosition = [
      {
        originX: align,
        originY: 'bottom',
        overlayX: align,
        overlayY: 'top',
      },
      {
        originX: align,
        originY: 'top',
        overlayX: align,
        overlayY: 'bottom',
      },
    ];
  }

  @Input()
  public set appDropdownMenuTriggerFor(value: TemplateRef<unknown> | null) {
    this.cdkTrigger.menuTemplateRef = value;
  }
}
