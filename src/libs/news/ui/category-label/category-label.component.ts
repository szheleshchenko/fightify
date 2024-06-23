import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CategoryLabelTheme} from './types';

@Component({
  selector: 'app-category-label',
  standalone: true,
  imports: [],
  templateUrl: './category-label.component.html',
  styleUrl: './category-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryLabelComponent {
  @Input() theme: CategoryLabelTheme = 'purple';
  @Input() text!: string;
}
