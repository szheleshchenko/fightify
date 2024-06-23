import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ButtonComponent} from '@libs/shared/ui/ui-kit';

@Component({
  selector: 'app-filter-wrapper',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filter-wrapper.component.html',
  styleUrl: './filter-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterWrapperComponent {
  @Input() buttonText!: string;
}
