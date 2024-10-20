import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [],
  templateUrl: './table-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export class TableHeaderComponent {}
