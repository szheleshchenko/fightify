import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentCardComponent {
  @Input() heading?: string;
}
