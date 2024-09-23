import {CdkMenuGroup} from '@angular/cdk/menu';
import {Component} from '@angular/core';

@Component({
  selector: 'app-menu-group',
  standalone: true,
  hostDirectives: [CdkMenuGroup],
  template: `<ng-content />`,
  host: {
    class: 'block',
  },
})
export class MenuGroupComponent {}
