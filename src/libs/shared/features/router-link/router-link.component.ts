import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-router-link',
  standalone: true,
  imports: [],
  templateUrl: './router-link.component.html',
  styleUrl: './router-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterLinkComponent {}
