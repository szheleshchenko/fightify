import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SelectComponent, SelectOption} from '@libs/shared/ui/ui-kit';
import {OrderFilter} from './types';

@Component({
  selector: 'app-order-filter',
  imports: [SelectComponent, ReactiveFormsModule],
  templateUrl: './order-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFilterComponent {
  public form = new FormControl<SelectOption<OrderFilter>>({title: 'Ascending', value: 'asc'});

  public options: Array<SelectOption<OrderFilter>> = [
    {
      title: 'Ascending',
      value: 'asc',
    },
    {
      title: 'Descending',
      value: 'desc',
    },
  ];
}
