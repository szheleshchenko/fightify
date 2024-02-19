import {Component, Input} from '@angular/core';
import {AvatarComponent} from '@libs/shared/ui/ui-kit/avatar';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() hasBorder: boolean = true;
}
