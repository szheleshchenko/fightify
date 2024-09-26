import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';

@Component({
  standalone: true,
  selector: 'app-under-construction',
  imports: [TranslocoDirective],
  templateUrl: './under-construction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderConstructionComponent {}
