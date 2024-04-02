import {Component} from '@angular/core';
import {OpponentDetailsComponent} from '@libs/shared/ui/opponent-details';
import {TableComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-fighter-last-fights',
  standalone: true,
  imports: [TableComponent, OpponentDetailsComponent],
  templateUrl: './fighter-last-fights.component.html',
  styleUrl: './fighter-last-fights.component.scss',
})
export class FighterLastFightsComponent {}
