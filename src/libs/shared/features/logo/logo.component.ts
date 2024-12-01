import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {mergeClasses} from '@libs/shared/utils/merge-classes';
import {injectAppLinks} from '../app-links';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: 'logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  public classes = input<string>();
  public logoClasses = computed(() => mergeClasses('hover:opacity-80', this.classes()));
  public appLinks = injectAppLinks();
}
