import {Component} from '@angular/core';
import {FighterDetailsComponent} from '@libs/fighter/features/fighter-details';

@Component({
  selector: 'app-fighter-view',
  standalone: true,
  imports: [FighterDetailsComponent],
  templateUrl: './fighter-view.component.html',
  styleUrl: './fighter-view.component.scss',
})
export class FighterViewComponent {}
