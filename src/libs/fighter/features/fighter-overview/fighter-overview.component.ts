import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FighterLastFightsComponent} from '@libs/fighter/features/fighter-last-fights';
import {ContentCardComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-fighter-overview',
  imports: [ContentCardComponent, FighterLastFightsComponent],
  templateUrl: './fighter-overview.component.html',
  styleUrl: './fighter-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FighterOverviewComponent {}
