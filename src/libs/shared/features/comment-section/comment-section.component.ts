import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Comment} from '@libs/shared/data-access/api/comment';
import {CommentComponent} from '@libs/shared/features/comment';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentSectionComponent {
  public comments: Array<Comment> = [
    {
      id: 1,
      authorName: 'Robert Fisher',
      date: '26 mins ago',
      avatarUrl:
        'https://alchemists.dan-fisher.dev/hockey/assets/images/hockey/samples/avatar-15.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad mini veniam.',
    },
    {
      id: 2,
      authorName: 'Robert Fisher',
      date: '26 mins ago',
      avatarUrl:
        'https://alchemists.dan-fisher.dev/hockey/assets/images/hockey/samples/avatar-15.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad mini veniam.',
    },
    {
      id: 3,
      authorName: 'Robert Fisher',
      date: '26 mins ago',
      avatarUrl:
        'https://alchemists.dan-fisher.dev/hockey/assets/images/hockey/samples/avatar-15.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad mini veniam.',
    },
    {
      id: 4,
      authorName: 'Robert Fisher',
      date: '26 mins ago',
      avatarUrl:
        'https://alchemists.dan-fisher.dev/hockey/assets/images/hockey/samples/avatar-15.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisi nel elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad mini veniam.',
    },
  ];
}
