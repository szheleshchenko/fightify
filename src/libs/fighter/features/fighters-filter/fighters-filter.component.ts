import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FightersActivityFilterComponent} from '@libs/fighter/ui/fighters-activity-filter';
import {FightersWeightFilterComponent} from '@libs/fighter/ui/fighters-weight-filter';
import {FilterWrapperComponent} from '@libs/shared/ui/filter-wrapper';
import {OrderFilterComponent} from '@libs/shared/ui/order-filter';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-fighters-filter',
  standalone: true,
  imports: [
    ButtonComponent,
    FightersActivityFilterComponent,
    FightersWeightFilterComponent,
    OrderFilterComponent,
    FilterWrapperComponent,
  ],
  templateUrl: './fighters-filter.component.html',
  styleUrl: './fighters-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FightersFilterComponent {}
