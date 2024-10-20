import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {ButtonDirective} from '../button';
import {
  TableBodyComponent,
  TableCellComponent,
  TableComponent,
  TableHeaderComponent,
  TableRowComponent,
} from '../table';
import {Column} from './types';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    TableComponent,
    TableBodyComponent,
    TableHeaderComponent,
    TableCellComponent,
    TableRowComponent,
    NgClass,
    ButtonDirective,
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

  public sortField = signal<keyof T | undefined>(undefined);
  public sortDirection = signal<'asc' | 'desc'>('desc');

  public sortedRows = computed(() => {
    const sortField = this.sortField();

    if (!sortField) {
      return this.data();
    }

    return this.data()
      .slice()
      .sort((a, b) => {
        const sortDirection = this.sortDirection();

        if (a[sortField] < b[sortField]) {
          return sortDirection === 'asc' ? -1 : 1;
        }

        if (a[sortField] > b[sortField]) {
          return sortDirection === 'asc' ? 1 : -1;
        }

        return 0;
      });
  });

  public rows = computed(() =>
    this.sortedRows().slice((this.currentPage() - 1) * this.currentPage(), this.perPage()),
  );

  public sortBy(field: keyof T) {
    if (this.sortField() === field) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortDirection.set('asc');
    }

    this.sortField.set(field);
  }
}
