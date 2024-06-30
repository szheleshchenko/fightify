import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {TemplateLink} from '@libs/shared/features/app-links';

@Component({
  selector: 'app-footer-resources-list',
  standalone: true,
  imports: [RouterLink, TranslocoDirective],
  templateUrl: 'resources-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterResourcesListComponent {
  public heading = input<string>();
  public items = input<Array<TemplateLink>>();
}
