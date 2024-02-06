import {Component, Input} from '@angular/core';
import {AvatarSize} from './types';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() src!: string;
  @Input() name?: string;
  @Input() size: AvatarSize = 'medium';
}
