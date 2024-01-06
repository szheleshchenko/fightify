import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoDirective} from '@ngneat/transloco';
import {Breadcrumb} from './types';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterLink, TranslocoDirective],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  @Input() title!: string;
  @Input() breadcrumbs!: Array<Breadcrumb>;
}
