import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [],
  templateUrl: 'footer.html',
  styleUrl: 'footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
