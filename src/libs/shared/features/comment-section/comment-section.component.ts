import {Component} from '@angular/core';
import {CommentComponent} from '@libs/shared/features/comment';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss',
})
export class CommentSectionComponent {}
