import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AvatarShape, AvatarSize} from './types';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() src!: string;
  @Input() name?: string;
  @Input() size?: AvatarSize = 'medium';
  @Input() shape?: AvatarShape = 'round';
}
