import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Link} from './types';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() link!: Link;
}
