import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  host: {
    class: 'contents',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {}
