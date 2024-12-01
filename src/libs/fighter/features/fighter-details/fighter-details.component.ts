import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-fighter-details',
  imports: [],
  templateUrl: './fighter-details.component.html',
  styleUrl: './fighter-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FighterDetailsComponent {}
