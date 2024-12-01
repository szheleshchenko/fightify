import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AvatarComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-fighter-card',
  imports: [RouterLink, AvatarComponent],
  templateUrl: './fighter-card.component.html',
  styleUrl: './fighter-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FighterCardComponent {}
