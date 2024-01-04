import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslocoDirective} from '@ngneat/transloco';
import {HeaderLink} from './types';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslocoDirective],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
})
export class HeaderComponent {
  @Input() links!: Array<HeaderLink>;
}
