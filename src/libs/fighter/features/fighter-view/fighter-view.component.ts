import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FighterDetailsComponent} from '@libs/fighter/features/fighter-details';
import {FighterOverviewComponent} from '@libs/fighter/features/fighter-overview';
import {TabComponent, TabsComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-fighter-view',
  standalone: true,
  imports: [FighterDetailsComponent, TabsComponent, TabComponent, FighterOverviewComponent],
  templateUrl: './fighter-view.component.html',
  styleUrl: './fighter-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FighterViewComponent {}
