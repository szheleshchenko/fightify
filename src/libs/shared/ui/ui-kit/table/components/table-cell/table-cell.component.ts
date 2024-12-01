import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-table-cell',
  imports: [],
  templateUrl: 'table-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export class TableCellComponent {}
