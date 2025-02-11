import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: 'spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  readonly size = input<number>(16);
}
