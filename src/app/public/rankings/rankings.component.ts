import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankingsPageComponent {}
