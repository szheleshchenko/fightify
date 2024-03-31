import {Component} from '@angular/core';
import {FighterLastFightsComponent} from '@libs/fighter/features/fighter-last-fights';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-fighter-overview',
  standalone: true,
  imports: [ContentCardComponent, FighterLastFightsComponent],
  templateUrl: './fighter-overview.component.html',
  styleUrl: './fighter-overview.component.scss',
})
export class FighterOverviewComponent {}
