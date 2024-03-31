import {Component} from '@angular/core';
import {TableComponent} from '@libs/shared/ui/ui-kit';
import {OpponentDetailsComponent} from './components/opponent-details';

@Component({
  selector: 'app-fighter-last-fights',
  standalone: true,
  imports: [TableComponent, OpponentDetailsComponent],
  templateUrl: './fighter-last-fights.component.html',
  styleUrl: './fighter-last-fights.component.scss',
})
export class FighterLastFightsComponent {}
