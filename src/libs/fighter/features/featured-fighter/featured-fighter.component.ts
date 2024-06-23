import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-featured-fighter',
  standalone: true,
  imports: [],
  templateUrl: './featured-fighter.component.html',
  styleUrl: './featured-fighter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedFighterComponent {}
