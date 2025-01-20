import {CdkMenu} from '@angular/cdk/menu';
import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {twMerge} from 'tailwind-merge';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
  },
  hostDirectives: [CdkMenu],
})
export class MenuComponent {
  public readonly userClasses = input<string>('', {alias: 'class'});
  public classes = computed(() =>
    twMerge('p-1 bg-white z-50 overflow-hidden rounded-md border shadow-md', this.userClasses()),
  );
}
