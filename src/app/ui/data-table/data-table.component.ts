import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonDirective} from '../button';
import {
  TableBodyDirective,
  TableCellDirective,
  TableComponent,
  TableHeaderDirective,
  TableRowDirective,
} from '../table';
import {Column} from './types';

@Component({
  selector: 'app-data-table',
  imports: [
    TableComponent,
    TableHeaderDirective,
    TableCellDirective,
    TableRowDirective,
    NgClass,
    ButtonDirective,
    RouterLink,
    TableBodyDirective,
  ],
  templateUrl: 'data-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent<T extends {id: number | string}> {
  public data = input.required<Array<T>>();
  public columns = input.required<Array<Column<T>>>();
  public currentPage = input<number>(1);
  public perPage = input<number>(10);
  public total = input<number>(0);

  public sortField = input<keyof T | null | undefined>();
  public desc = input<boolean | null | undefined>(true);
}
