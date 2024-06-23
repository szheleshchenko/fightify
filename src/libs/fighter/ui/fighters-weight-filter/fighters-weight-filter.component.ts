import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MaleWeight} from '@libs/shared/data-access/api/fighter';
import {SelectComponent, SelectOption} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-fighters-weight-filter',
  standalone: true,
  imports: [SelectComponent, ReactiveFormsModule],
  templateUrl: './fighters-weight-filter.component.html',
  styleUrl: './fighters-weight-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FightersWeightFilterComponent {
  public form = new FormControl<SelectOption<MaleWeight>>({title: 'All', value: 'all'});

  public options: Array<SelectOption<MaleWeight>> = [
    {
      title: 'Heavyweight',
      value: 'heavyweight',
    },
    {
      title: 'Light heavyweight',
      value: 'light-heavyweight',
    },
    {
      title: 'Middleweight',
      value: 'middleweight',
    },
    {
      title: 'Welterweight',
      value: 'welterweight',
    },
    {
      title: 'Lightweight',
      value: 'lightweight',
    },
    {
      title: 'Featherweight',
      value: 'featherweight',
    },
    {
      title: 'Bantamweight',
      value: 'bantamweight',
    },
    {
      title: 'Flyweight',
      value: 'flyweight',
    },
  ];
}
