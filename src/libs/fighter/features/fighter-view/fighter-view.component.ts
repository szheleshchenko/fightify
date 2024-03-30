import {Component} from '@angular/core';
import {FighterDetailsComponent} from '@libs/fighter/features/fighter-details';
import {TabComponent, TabsComponent} from '@libs/shared/ui/ui-kit/tabs';

@Component({
  selector: 'app-fighter-view',
  standalone: true,
  imports: [FighterDetailsComponent, TabsComponent, TabComponent],
  templateUrl: './fighter-view.component.html',
  styleUrl: './fighter-view.component.scss',
})
export class FighterViewComponent {}
