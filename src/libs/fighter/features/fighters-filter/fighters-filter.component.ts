import {Component} from '@angular/core';
import {FightersActivityFilterComponent} from '@libs/fighter/ui/fighters-activity-filter';
import {FightersWeightFilterComponent} from '@libs/fighter/ui/fighters-weight-filter';
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
  ],
  templateUrl: './fighters-filter.component.html',
  styleUrl: './fighters-filter.component.scss',
})
export class FightersFilterComponent {}
