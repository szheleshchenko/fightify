import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FighterCardComponent} from '@libs/fighter/features/fighter-card';

@Component({
  selector: 'app-fighters-list',
  imports: [FighterCardComponent],
  templateUrl: './fighters-list.component.html',
  styleUrl: './fighters-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FightersListComponent {}
