import {CdkMenuGroup} from '@angular/cdk/menu';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-menu-group',
  standalone: true,
  hostDirectives: [CdkMenuGroup],
  template: `<ng-content />`,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuGroupComponent {}
