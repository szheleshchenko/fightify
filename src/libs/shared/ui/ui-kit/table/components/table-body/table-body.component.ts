import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-table-body',
  standalone: true,
  imports: [],
  templateUrl: 'table-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export class TableBodyComponent {}
