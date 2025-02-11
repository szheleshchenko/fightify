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
  readonly data = input.required<Array<T>>();
  readonly columns = input.required<Array<Column<T>>>();
  readonly currentPage = input<number>(1);
  readonly perPage = input<number>(10);
  readonly total = input<number>(0);

  readonly sortField = input<keyof T | null | undefined>();
  readonly desc = input<boolean | null | undefined>(true);
}
