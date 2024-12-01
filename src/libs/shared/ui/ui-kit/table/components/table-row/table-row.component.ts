import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-table-row',
  imports: [],
  templateUrl: './table-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export class TableRowComponent {}
