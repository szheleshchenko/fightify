import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingPageComponent {}
